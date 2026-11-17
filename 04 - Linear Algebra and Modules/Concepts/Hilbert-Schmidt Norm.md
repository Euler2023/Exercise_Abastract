---
title: Hilbert-Schmidt Norm
aliases:
  - Frobenius Norm
  - Frobenius Matrix Norm
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - matrix-norms
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 2, Definition 2.2 and Proposition 2.1 proof, printed p. 32, PDF p. 44; Section 2.6, Exercises 1–2, printed p. 46, PDF p. 58"
source_status: verified
created: 2026-11-17
---

# Hilbert-Schmidt Norm

## Definition

> [!info] Definition
> For $X=(X_{jk})\in M_n(\mathbb C)$, its **Hilbert–Schmidt norm**, also called the Frobenius norm, is
> $$
> \|X\|_{\mathrm{HS}}
> =\left(\sum_{j,k=1}^{n}|X_{jk}|^2\right)^{1/2}
> =\bigl(\operatorname{tr}(X^*X)\bigr)^{1/2}.
> $$
> Here $X^*=\overline X^{\,T}$. Hall abbreviates this norm to $\|X\|$.

The trace equality follows because $(X^*X)_{kk}=\sum_j\overline{X_{jk}}X_{jk}$. [S10, Definition 2.2 and (2.2), printed p. 32, PDF p. 44]

## Intuition and Conventions

This is the Euclidean length of the vector consisting of all matrix entries. In particular, it measures entrywise convergence:
$$
X_m\longrightarrow X
\quad\Longleftrightarrow\quad
\|X_m-X\|_{\mathrm{HS}}\longrightarrow0.
$$
One direction follows from $|(X_m-X)_{jk}|\le\|X_m-X\|_{\mathrm{HS}}$; the other follows by summing finitely many squared entry differences.

The associated Hermitian inner product may be written as $\langle X,Y\rangle_{\mathrm{HS}}=\operatorname{tr}(X^*Y)$, conjugate linear in the first variable, as in Hall. The existing Inner Product Spaces note uses first-variable linearity, hence the reversed trace convention. Both conventions give the same norm.

## Key Properties

For $X,Y\in M_n(\mathbb C)$ and $c\in\mathbb C$:

1. $\|X\|\ge0$, with equality exactly for $X=0$; $\|cX\|=|c|\|X\|$.
2. $\|X+Y\|\le\|X\|+\|Y\|$, by the Euclidean triangle inequality on the entry vector.
3. $\|XY\|\le\|X\|\|Y\|$. Entrywise Cauchy–Schwarz and summation prove this in [[04 - Linear Algebra and Modules/Exercises/Exercise LA668 - Submultiplicativity of the Hilbert-Schmidt Norm|the independent submultiplicativity derivation]].
4. If $U,V$ are unitary, $\|UXV\|=\|X\|$. Indeed, cyclicity of trace and $U^*U=VV^*=I$ give $\operatorname{tr}((UXV)^*(UXV))=\operatorname{tr}(X^*X)$.
5. In any orthonormal basis $(u_j)$, $\|X\|^2=\sum_{j,k}|\langle u_j,Xu_k\rangle|^2$, and every eigenvalue satisfies $|\lambda|\le\|X\|$. These are independently derived in [[04 - Linear Algebra and Modules/Exercises/Exercise LA669 - Orthonormal Basis Invariance and the Eigenvalue Bound|the basis-invariance and eigenvalue-bound proof]].

The cyclic trace identity used above is $\operatorname{tr}(AB)=\operatorname{tr}(BA)$, obtained by exchanging the two finite summation indices.

## Matrix Power Series

Submultiplicativity gives $\|X^m\|\le\|X\|^m$ for integers $m\ge1$. Therefore
$$
\sum_{m=0}^{\infty}\left\|\frac{X^m}{m!}\right\|
\le\sqrt n+\sum_{m=1}^{\infty}\frac{\|X\|^m}{m!}<\infty.
$$
This proves absolute convergence of the matrix exponential. On $\|X\|\le R$, the same tail bound is uniform; the Weierstrass M-test and continuity of polynomial partial sums prove continuity of $X\mapsto e^X$. This is Hall's proof of Proposition 2.1. [S10, printed p. 32, PDF p. 44]

> [!warning] Identity and operator-norm boundary
> $\|I_n\|_{\mathrm{HS}}=\sqrt n$, which is not 1 when $n>1$. Keep the zeroth term of a power series separate. This norm is not the induced operator norm $\|X\|_{\mathrm{op}}=\sup_{\|v\|_2=1}\|Xv\|_2$.

For completeness, $\|X\|_{\mathrm{op}}\le\|X\|_{\mathrm{HS}}\le\sqrt n\|X\|_{\mathrm{op}}$. The first inequality follows by Cauchy–Schwarz on each row of $Xv$; the second follows from $\|X\|_{\mathrm{HS}}^2=\sum_k\|Xe_k\|_2^2\le n\|X\|_{\mathrm{op}}^2$.

## Examples

- $\|E_{jk}\|=1$ for a matrix unit.
- $\|\operatorname{diag}(3,4)\|=5$, while its induced operator norm is 4.
- For $N=sE_{12}$ in dimension two, $\|N\|=|s|$ but $N^2=0$. Thus a large norm does not prevent a matrix logarithm series from terminating.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Logarithms|Matrix Logarithms]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The source definition, trace formula, convergence argument, and exercise statements were checked on the original 200 dpi pages. The norm and entrywise arguments above are independent explanations. Submultiplicativity, orthonormal-basis invariance, and the eigenvalue bound are exercises in Hall; the linked vault notes supply independent proofs. No infinite-dimensional Hilbert–Schmidt theory is asserted here.
