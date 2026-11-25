---
title: Lie Algebras
topic: representation-theory
tags:
  - concept
  - definition
  - representation-theory
  - lie-theory
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, §9.6, printed pp. 275–277, PDF pp. 287–289; Brian C. Hall, Lie Groups, Lie Algebras, and Representations, 2nd ed., Ch. 3, Definitions 3.13–3.15 and Section 3.6, printed pp. 54, 65–66, PDF pp. 66, 77–78"
source_status: partially-verified
status: not-started
---

# Lie Algebras

The structural results below concern finite-dimensional Lie algebras over a field of characteristic zero.

## Definition

> [!info] Definition (Lie Algebra)
> A **Lie algebra** over a field $F$ is a vector space $\mathfrak{g}$ equipped with a bilinear operation $[\cdot, \cdot]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$ (the **Lie bracket**) satisfying:
>
> 1. **Alternation**: $[X,X]=0$ for every $X$. Over a field of characteristic zero this is equivalent to $[X,Y]=-[Y,X]$.
> 2. **Jacobi identity**: $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$

## Examples

### Matrix Lie Algebras

> [!example] Example 1: $\mathfrak{gl}_n(F)$
> All $n \times n$ matrices with bracket $[A, B] = AB - BA$ (commutator).
> Dimension: $n^2$.

> [!example] Example 2: $\mathfrak{sl}_n(F)$
> Traceless matrices: $\{A \in \mathfrak{gl}_n : \text{tr}(A) = 0\}$.
> Dimension: $n^2 - 1$.

> [!example] Example 3: $\mathfrak{so}_n(F)$
> Skew-symmetric matrices: $\{A : A^T = -A\}$.
> Dimension: $\frac{n(n-1)}{2}$.

> [!example] Example 4: $\mathfrak{su}_n$
> Skew-Hermitian traceless: $\{A : A^\dagger = -A, \text{tr}(A) = 0\}$.
> Dimension: $n^2 - 1$.

### The Fundamental Example: $\mathfrak{sl}_2$

$$
\mathfrak{sl}_2 = \text{span}\{e, f, h\}.
$$

The basis matrices are

$$
e = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad f = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}, \quad h = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.
$$

Their bracket relations are

$$
[h, e] = 2e, \quad [h, f] = -2f, \quad [e, f] = h.
$$

### Abstract Lie Algebras

> [!example] Example 5: Abelian Lie Algebra
> Any vector space with $[X, Y] = 0$ for all $X, Y$.

> [!example] Example 6: Heisenberg Algebra
> $\mathfrak{h}_3 = \text{span}\{x, y, z\}$ with $[x, y] = z$, all others zero.
> (Models $[q, p] = i\hbar$ in quantum mechanics)

## Subalgebras and Ideals

> [!info] Definition
> - A **subalgebra** $\mathfrak{h} \subseteq \mathfrak{g}$ is a subspace closed under bracket.
> - An **ideal** $\mathfrak{i} \subseteq \mathfrak{g}$ satisfies $[\mathfrak{g}, \mathfrak{i}] \subseteq \mathfrak{i}$.

### Important Ideals

| Ideal | Definition | Notation |
|-------|------------|----------|
| Center | $\{X : [X, Y] = 0 \ \forall Y\}$ | $Z(\mathfrak{g})$ |
| Derived algebra | $[\mathfrak{g}, \mathfrak{g}]$ | $\mathfrak{g}'$ or $[\mathfrak{g}, \mathfrak{g}]$ |
| Radical | Maximal solvable ideal | $\text{rad}(\mathfrak{g})$ |

## Homomorphisms

> [!info] Definition
> A **Lie algebra homomorphism** $\phi: \mathfrak{g} \to \mathfrak{h}$ is a linear map satisfying
> $$
> \phi([X, Y]) = [\phi(X), \phi(Y)].
> $$

The kernel is always an ideal.

## Complexification and Real Forms

For a real Lie algebra $\mathfrak g$, its **complexification** $\mathfrak g_{\mathbb C}$ consists of formal sums $X+iY$ with $X,Y\in\mathfrak g$. Multiplication by $i$ sends $X+iY$ to $-Y+iX$. Complex bilinearity extends the original bracket uniquely:

$$
[X+iY,U+iV]=[X,U]-[Y,V]+i([X,V]+[Y,U]).
$$

The Jacobi expression is complex trilinear, so its vanishing on the real subspace $\mathfrak g$, which spans $\mathfrak g_{\mathbb C}$ over $\mathbb C$, proves Jacobi for the extension. If $\mathfrak g$ is a real matrix Lie algebra in $M_n(\mathbb C)$, evaluating $X+iY$ as a matrix identifies $\mathfrak g_{\mathbb C}$ with $\mathfrak g+i\mathfrak g$ exactly when $\mathfrak g\cap i\mathfrak g=\{0\}$. Indeed, $X+iY=0$ as a matrix is equivalent to $X=-iY$ lying in the intersection.

A **real form** of a complex Lie algebra is a real Lie algebra whose complexification is isomorphic to it. For example, $\mathfrak{su}(2)$ and $\mathfrak{sl}(2,\mathbb R)$ are both real forms of $\mathfrak{sl}(2,\mathbb C)$. Comparing their adjoint operators distinguishes their real Lie algebra structures in Exercise 11 of §3.9.

## Structure Theory

### Solvable and Nilpotent

> [!info] Definition
> Write $[U,V]$ for the linear span of all brackets of elements of the two subspaces.
> - $\mathfrak g$ is **solvable** if its derived series $D^0=\mathfrak g$, $D^{j+1}=[D^j,D^j]$ reaches zero.
> - $\mathfrak g$ is **nilpotent** if its lower central series $C^0=\mathfrak g$, $C^{j+1}=[\mathfrak g,C^j]$ reaches zero.

Hall calls the descending sequence $C^j$ the “upper central series” in Definition 3.15. The recurrence specifies the sequence independently of this terminology. Induction gives $D^j\subseteq C^j$ because $D^j\subseteq\mathfrak g$ and $D^j\subseteq C^j$ imply $[D^j,D^j]\subseteq[\mathfrak g,C^j]$. Thus nilpotence implies solvability.

> [!example] Strictly upper triangular and upper triangular matrices
> A product of $k$ strictly upper triangular $n\times n$ matrices can have nonzero entries only at least $k$ places above the diagonal. The lower central series of their Lie algebra therefore reaches zero, as in Exercise 3 of §3.9. The Heisenberg algebra is the $3\times3$ case.
>
> For the full upper triangular Lie algebra, every commutator has zero diagonal, so its first derived algebra lies in the strictly upper triangular one and the derived series reaches zero. For $n\ge2$, $[E_{11},E_{12}]=E_{12}$ keeps $E_{12}$ in every term of the lower central series, showing that the full algebra is solvable and fails to be nilpotent.

### Semisimple and Simple

> [!info] Definition
> - $\mathfrak{g}$ is **simple** if it has no non-trivial ideals and $\dim \mathfrak{g} > 1$.
> - $\mathfrak{g}$ is **semisimple** if $\text{rad}(\mathfrak{g}) = 0$.

> [!abstract] Theorem
> $\mathfrak{g}$ is semisimple $\iff$ $\mathfrak{g} = \mathfrak{g}_1 \oplus \cdots \oplus \mathfrak{g}_k$ (direct sum of simple ideals).

### The Killing Form

> [!info] Definition
> The **Killing form** is given by
> $$
> \kappa(X, Y) = \text{tr}(\text{ad}_X \circ \text{ad}_Y)
> $$
> where $\text{ad}_X(Y) = [X, Y]$.

> [!abstract] Cartan's Criterion
> - $\mathfrak{g}$ is solvable $\iff$ $\kappa(X, Y) = 0$ for all $X \in \mathfrak{g}$, $Y \in [\mathfrak{g}, \mathfrak{g}]$
> - $\mathfrak{g}$ is semisimple $\iff$ $\kappa$ is non-degenerate

## Universal Enveloping Algebra

> [!info] Definition
> The **universal enveloping algebra** $U(\mathfrak{g})$ is the associative algebra
> $$
> U(\mathfrak{g}) = T(\mathfrak{g}) / \langle X \otimes Y - Y \otimes X - [X, Y] \rangle.
> $$

> [!abstract] PBW Theorem
> If $\{X_1, \ldots, X_n\}$ is a basis of $\mathfrak{g}$, then the ordered monomials $X_1^{a_1} \cdots X_n^{a_n}$ with $a_i \geq 0$ form a basis of $U(\mathfrak{g})$.

Representations of $\mathfrak{g}$ correspond to $U(\mathfrak{g})$-modules.

## Classification

> [!abstract] Theorem (Cartan-Killing Classification)
> Simple complex Lie algebras are classified by Dynkin diagrams:
>
> | Type | Algebra | Rank |
> |------|---------|------|
> | $A_n$ | $\mathfrak{sl}_{n+1}$ | $n$ |
> | $B_n$ | $\mathfrak{so}_{2n+1}$ | $n$ |
> | $C_n$ | $\mathfrak{sp}_{2n}$ | $n$ |
> | $D_n$ | $\mathfrak{so}_{2n}$ | $n$ |
> | $E_6, E_7, E_8$ | Exceptional | 6, 7, 8 |
> | $F_4$ | Exceptional | 4 |
> | $G_2$ | Exceptional | 2 |

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Adjoint Representation and Invariant Trace Forms|Adjoint Representation and Invariant Trace Forms]]
- [[06 - Representation Theory/Concepts/sl2 Representations|sl₂ Representations]]
- [[06 - Representation Theory/Concepts/Root Systems|Root Systems]]
- [[06 - Representation Theory/Concepts/Semisimple Lie Algebras|Semisimple Lie Algebras]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

This note has a named source with printed-page and physical-PDF-page provenance, and the cited bounded slice was checked for the core definitions or results used here. Because the note may also contain independent exposition or claims beyond that slice, its overall status remains partially verified unless a claim-level audit is recorded.

The two descending series and the $3\times3$ example were checked in [S10, Ch. 3, Definitions 3.13–3.15 and Proposition 3.16, printed p. 54, PDF p. 66]. The complexification and matrix realization are proved in [S10, §3.6, Definition 3.36 and Propositions 3.37–3.38, printed pp. 65–66, PDF pp. 77–78]. The full upper triangular comparison above is an independent derivation. The general strictly upper triangular result and the distinction between the two real forms are Hall's assigned exercises, with independent proofs in the exercise notes.
