---
title: Matrix Logarithms
aliases:
  - Matrix Logarithm
  - Logarithm Series for Matrices
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - matrix-functions
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Section 2.3, Definition 2.7, Theorem 2.8, Proposition 2.9 and Theorem 2.10, printed pp. 37–39, PDF pp. 49–51; Ch. 3, Theorem 3.42 and Corollary 3.44, printed pp. 68–70, PDF pp. 80–82"
source_status: verified
created: 2026-11-17
---

# Matrix Logarithms

## Definition

> [!info] Logarithm and the local series
> A **logarithm of a complex matrix $A$** is a matrix $L$ such that $e^L=A$. Hall defines a particular series logarithm by
> $$
> \log A=\sum_{m=1}^{\infty}(-1)^{m+1}\frac{(A-I)^m}{m}
> $$
> whenever this series converges. It converges absolutely when $\|A-I\|_{\mathrm{HS}}<1$.

Indeed, for $r=\|A-I\|<1$, submultiplicativity gives $\sum_{m\ge1}\|(A-I)^m/m\|\le\sum_{m\ge1}r^m/m<\infty$. [S10, Definition 2.7, printed p. 37, PDF p. 49]

## Intuition

The series transfers the scalar logarithm near 1 to matrices near $I$. It uses powers of a single matrix, which commute with each other. This does not supply an identity such as $\log(AB)=\log A+\log B$ for arbitrary matrices.

Distinguish the local series from an arbitrary logarithm. Existence of some logarithm does not imply convergence of this series, and a convergent series does not recover every possible exponent.

## Key Properties and Hypotheses

Hall's Theorem 2.8 states:

- On $\|A-I\|<1$, the series is continuous and $e^{\log A}=A$.
- If $\|X\|<\log2$, then $\|e^X-I\|<1$ and $\log(e^X)=X$.

Here the norm is Hilbert–Schmidt and $\log2$ is the scalar natural logarithm. The estimate $\|e^X-I\|\le\sum_{m\ge1}\|X\|^m/m!=e^{\|X\|}-1$ proves the stated convergence bound. Hall's proof reduces the inverse identities to scalar ones for diagonalizable matrices and then uses approximation by diagonalizable matrices and continuity. [S10, Theorem 2.8 and proof, printed pp. 38–39, PDF pp. 50–51]

**Dependency boundary:** the density assertion in that proof is Hall's assigned Exercise 4, independently supplied in [[04 - Linear Algebra and Modules/Exercises/Exercise LA671 - Density of Diagonalizable Complex Matrices|the diagonalizable-approximation proof]]. The existence theorem for an arbitrary invertible complex matrix is stated as Theorem 2.10, with its proof delegated to Exercises 9–10; it is not presented in the source as a complete stand-alone proof on that page.

## Logarithms in a Matrix Lie Algebra

Let $G\subseteq GL_n(\mathbb C)$ be a matrix Lie group with Lie algebra $\mathfrak g$. Hall's Theorem 3.42 gives a group-dependent $\varepsilon\in(0,\log 2)$ such that on the neighborhood $V_\varepsilon=\{\exp X:\|X\|_{\mathrm{HS}}<\varepsilon\}$ of $I$,

$$
A\in G\quad\Longleftrightarrow\quad\log A\in\mathfrak g.
$$

The implication from right to left uses $A=e^{\log A}$. The other implication is Hall's local subgroup theorem. In its proof, $M_n(\mathbb C)$ is a real inner product space, and the orthogonal decomposition $M_n(\mathbb C)=\mathfrak g\oplus\mathfrak g^\perp$ is used to study $e^Xe^Y$ for $X\in\mathfrak g$ and $Y\in\mathfrak g^\perp$. The theorem gives the logarithm as the inverse of the exponential on corresponding neighborhoods in $G$ and $\mathfrak g$ (Corollary 3.44). The larger condition $\|A-I\|_{\mathrm{HS}}<1$ guarantees convergence and allows the logarithm to lie outside $\mathfrak g$, as Exercise 7 of §3.9 illustrates.

## A Useful Remainder Estimate

For $\|B\|<1$,
$$
\begin{aligned}
\|\log(I+B)-B\|
&\le\sum_{m=2}^{\infty}\frac{\|B\|^m}{m}\\
&\le\frac{\|B\|^2}{2(1-\|B\|)}.
\end{aligned}
$$
This is an independent explicit version of Hall's Proposition 2.9: use $1/m\le1/2$ for $m\ge2$ and sum the geometric series. In particular, if $\|B\|<1/2$, the remainder is bounded by $\|B\|^2$. [S10, Proposition 2.9, printed p. 39, PDF p. 51]

This estimate explains why $m\log(I+X/m)\to X$ for a fixed matrix $X$ as positive integers $m\to\infty$.

## Nilpotent and Global Boundaries

If $N^r=0$, then
$$
\log(I+N)=\sum_{m=1}^{r-1}(-1)^{m+1}\frac{N^m}{m}
$$
is finite, regardless of the size of $\|N\|$. It is nilpotent because it is $N$ times a polynomial in $N$. Likewise $e^N-I$ is nilpotent. The finite logarithm and exponential are mutually inverse between nilpotent and unipotent matrices; their independent proof appears in the linked exercise notes through the dynamic exercise query.

Every $A\in GL_n(\mathbb C)$ has a logarithm: decompose into generalized-eigenvalue blocks $\lambda I+N$ with $\lambda\ne0$, choose a scalar logarithm $\ell$ of $\lambda$, and use $\ell I+\log(I+\lambda^{-1}N)$ on that block. This invokes generalized-eigenspace decomposition and the nilpotent inverse identity. It is a complex-field existence result, not uniqueness and not a real-field theorem. [S10, Theorem 2.10 and Exercise 10, printed pp. 39, 48, PDF pp. 51, 60; independent derivation in the linked exercise notes]

## Examples and Counterexamples

- If $N=sE_{12}$, then $N^2=0$ and $\log(I+N)=N$, even for $|s|\gg1$; $e^N=I+N$.
- For $X=2\pi iI$, the series $\log(e^X)=\log I=0$ converges but does not equal $X$. Thus convergence alone does not justify cancellation of $\log$ with $\exp$.
- The real one-by-one matrix $[-1]$ has complex logarithms $[(2k+1)\pi i]$, $k\in\mathbb Z$, but has no real one-by-one logarithm because $e^x>0$ for real $x$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Hilbert-Schmidt Norm|Hilbert-Schmidt Norm]]
- [[04 - Linear Algebra and Modules/Concepts/Jordan Canonical Form|Jordan Canonical Form]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces#Orthogonal Complement|Orthogonal Complement]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The source pages for Definition 2.7, Theorem 2.8 and its proof, Proposition 2.9, and the stated Theorem 2.10 were visually checked at 200 dpi. The explicit remainder bound and examples above are independently verified deductions. The nilpotent and global inverse statements are assigned exercises in Hall; the vault supplies independent proofs, naming the local inverse theorem and generalized-eigenspace decomposition where used. No globally single-valued logarithm on all of $GL_n(\mathbb C)$ is asserted.

Hall proves the local subgroup theorem and its local-inverse corollary in Chapter 3 [S10, §§3.7–3.8, Theorem 3.42 and Corollary 3.44, printed pp. 68–70, PDF pp. 80–82]. The exercise on the larger convergence ball is [S10, Ch. 3, §3.9, Exercise 7, printed p. 74, PDF p. 86].
