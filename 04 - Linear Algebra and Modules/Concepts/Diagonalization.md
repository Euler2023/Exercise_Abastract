---
title: Diagonalization
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 4, §§4.6–4.7, printed pp. 116–125, PDF pp. 128–137; Serge Lang, Algebra, rev. 3rd ed., Ch. XIV, Exercise 13, printed pp. 568-569, PDF pp. 583-584"
source_status: partially-verified
status: not-started
---

# Diagonalization

## Definition

> [!info] Definition (Diagonalizable)
> A [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|linear transformation]] $T: V \to V$ (or matrix $A$) is **diagonalizable** if there exists a [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|basis]] of $V$ consisting of [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|eigenvectors]] of $T$.
>
> Equivalently, $A$ is diagonalizable if $A = PDP^{-1}$ for some invertible $P$ and diagonal $D$.

## Diagonalizability Criteria

> [!abstract] Theorem (Diagonalizability)
> For $A\in M_n(k)$ over a field $k$, each of the following is equivalent to diagonalizability **over $k$**:
> 1. The dimensions of its eigenspaces for eigenvalues in $k$ sum to $n$.
> 2. Its characteristic polynomial splits over $k$, and every eigenvalue has equal geometric and algebraic multiplicities.
> 3. Its minimal polynomial is a product of distinct linear factors in $k[t]$.
>
> Having no repeated roots in an algebraic closure alone is insufficient. For example, $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ has minimal polynomial $t^2+1$ and is diagonalizable over $\mathbb C$, but not over $\mathbb R$.

> [!tip] Sufficient Conditions
> - An $n\times n$ matrix over $k$ with $n$ distinct eigenvalues **in $k$** is diagonalizable over $k$.
> - A real symmetric matrix is orthogonally diagonalizable over $\mathbb R$.
> - A complex Hermitian matrix, or more generally a complex normal matrix ($A^*A=AA^*$), is unitarily diagonalizable over $\mathbb C$ (the spectral theorem).

## The Diagonalization Process

For matrix $A \in M_n(F)$:
1. Find all eigenvalues $\lambda_1, \ldots, \lambda_k$
2. Find basis for each eigenspace $E_{\lambda_i}$
3. Check if eigenvectors form a basis for $F^n$
4. If yes: $P = [v_1 | \cdots | v_n]$, $D = \text{diag}(\lambda_1, \ldots, \lambda_n)$
5. Then $A = PDP^{-1}$

## Applications

> [!tip] Computing Powers
> If $A = PDP^{-1}$, then $A^k = PD^kP^{-1}$, which is easy to compute.

> [!tip] Matrix Exponential
> $e^A = Pe^DP^{-1}$ where $e^D = \text{diag}(e^{\lambda_1}, \ldots, e^{\lambda_n})$.

## Examples

> [!example] Example 1: Diagonalizable
> $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ has eigenvalues $5, 2$ with eigenvectors $(1,1)^T, (1,-2)^T$.
> So $A = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}^{-1}$

> [!example] Example 2: Not diagonalizable
> $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has only eigenvalue $1$ with geometric multiplicity $1 < 2$.

> [!example] Example 3: Symmetric matrix
> All symmetric matrices over $\mathbb{R}$ are orthogonally diagonalizable.

## Jordan Normal Form

> [!info] Definition (Jordan Form)
> When the characteristic polynomial of $A$ splits over $k$, $A$ has a **Jordan normal form** over $k$:
> $$
> J = \begin{pmatrix} J_1 & & \\ & \ddots & \\ & & J_k \end{pmatrix},
> \qquad
> J_i = \begin{pmatrix} \lambda_i & 1 & & \\ & \lambda_i & \ddots & \\ & & \ddots & 1 \\ & & & \lambda_i \end{pmatrix}.
> $$
> Diagonalizability is the case in which all blocks have size one. See [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]].

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations|Linear Transformations]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]] (orthogonal diagonalization)

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. Because the note may also contain independent exposition or claims beyond that slice, its overall status remains partially verified unless a claim-level audit is recorded.

The base-field condition in the minimal-polynomial criterion was checked against [S2, Ch. XIV, Ex. 13(a)-(b), printed pp. 568-569, PDF pp. 583-584] on 2026-09-29. The exercise states the criterion; its full independent proof, including invariant subspaces and simultaneous diagonalization, is in [[04 - Linear Algebra and Modules/Exercises/Exercise LA429 - Diagonalizability and Simultaneous Diagonalization|Exercise LA429]]. The split-field condition for Jordan form follows from [S2, Ch. XIV, §2, Theorem 2.4 and Corollary 2.5, printed pp. 558-559, PDF pp. 573-574]. The spectral theorem above remains a named external input in this note.
