---
title: 'Exercise LA552: Determinant Lines of Exterior Powers'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 4, printed p. 233, PDF p. 252
source_refs:
- S4/ch-III/sec-4/ex-4
created: '2026-10-23'
---

# Exercise LA552: Determinant Lines of Exterior Powers

## Problem Statement

> [!question] Neukirch III.4.4
> If $M$ is a projective metrized $\mathfrak o$-module of rank $n$, and $p\ge0$, then there is a canonical isometry
> $$
> \det\left(\bigwedge^pM\right)\simeq(\det M)^{\otimes\binom{n-1}{p-1}}.
> $$

## Hints

> [!hint]- Hint 1
> For a local basis $e_1,\ldots,e_n$, order all increasing $p$-element subsets $I$ lexicographically, form $e_I$, and take their total exterior product. Each $e_i$ occurs $\binom{n-1}{p-1}$ times.

> [!hint]- Hint 2
> Counting exponents for diagonal matrices alone is insufficient: prove the change-of-basis identity $\det(\bigwedge^pA)=(\det A)^{\binom{n-1}{p-1}}$. Compute for elementary shears and diagonal matrices, then extend by a polynomial identity.

> [!hint]- Hint 3
> The Gram matrix of the exterior-power basis is the compound matrix of the original Gram matrix. The same determinant identity gives the isometry.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> First suppose $n\ge1$ and $1\le p\le n$, and write $c=\binom{n-1}{p-1}$ and $r=\binom np$. For a local basis $e_1,\ldots,e_n$ of $M$, set $e_I=e_{i_1}\wedge\cdots\wedge e_{i_p}$ and order all increasing $p$-element subsets $I$ lexicographically. Define
> $$
> \bigwedge_{|I|=p}e_I\longmapsto(e_1\wedge\cdots\wedge e_n)^{\otimes c}.
> $$
>
> **1. The change-of-basis determinant identity.** For an elementary shear $E_{ab}(t)$, the map $\bigwedge^pE_{ab}(t)$ only adds to basis vectors containing $b$ but not $a$ a multiple of the vector obtained by replacing $b$ by $a$. No replacement in the opposite direction occurs. Pairing these basis vectors gives shear blocks of determinant $1$, so the total determinant is $1$. For a diagonal matrix $D_a(t)$ that scales only coordinate $a$, exactly $c$ subsets of size $p$ contain $a$. Thus $\det(\bigwedge^pD_a(t))=t^c$.
>
> Over the rational function field of the generic matrix, Gaussian elimination expresses an invertible matrix as a product of shear matrices, diagonal matrices, and permutation matrices expressible in terms of them. Hence
> $$
> \det(\bigwedge^pA)=(\det A)^c.
> $$
> Both sides are polynomials with integer coefficients in the matrix entries. Since they agree in the generic rational function field, they agree in the integer polynomial ring and remain equal after specialization to any commutative ring.
>
> **2. Gluing.** When the local basis changes by $A$, the generator on the left is multiplied by $\det(\bigwedge^pA)$, and the generator on the right by $(\det A)^c$. These are equal by the first step. Thus the local definitions agree on overlaps and glue to a global isomorphism independent of the bases.
>
> **3. Isometry.** Let $H$ be the Gram matrix of an embedding component. By the definition of the exterior-power metric, the Gram matrix of $e_I$ is the compound matrix $C_p(H)$ consisting of all $p\times p$ minors of $H$; this is the matrix of $\bigwedge^pH$. Therefore
> $$
> \left\|\bigwedge_{|I|=p}e_I\right\|^2=\det C_p(H)=(\det H)^c
> =\left\|(e_1\wedge\cdots\wedge e_n)^{\otimes c}\right\|^2.
> $$
> The map is an isometry in every embedding component. It is defined over $\mathfrak o$ and commutes with $F$, giving the required canonical isometry. The exterior-power and determinant metrics are defined in [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, printed pp. 228,231, PDF pp. 247,250].
>
> **4. Boundary conventions.** If $p=0$, then $\bigwedge^0M=\mathfrak o$; set $\binom{n-1}{-1}=0$, so both sides are unit lines. If $p>n$, the exterior power is zero and its determinant is the unit line; set $\binom{n-1}{p-1}=0$. If $n=0$, then $M=0$, and all the relevant determinants are unit lines. There is no need here to assign the usual binomial notation with a negative upper index a meaning it does not ordinarily have: express the rank-zero conclusion directly by the isometry of unit lines.
>
> For example, if $n=3,p=2$, the basis is $e_{12},e_{13},e_{23}$. Each original basis vector occurs twice, and $c=2$. If $H=\operatorname{diag}(a,b,d)$, the diagonal entries of the exterior-power Gram matrix are $ab,ad,bd$, whose product is $(abd)^2$, directly verifying the identity.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Metrized Modules and Determinant Metrics|Metrized Modules and Determinant Metrics]]

- [[04 - Linear Algebra and Modules/Concepts/Exterior Algebra|Exterior Algebra]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §4, Exercise 4, printed p. 233, PDF p. 252]. Independent change-of-basis and Gram-matrix proof. The source image clearly reads $p\ge0$; OCR omitted the equality sign.
- **Boundary conventions:** The printed formula does not explain binomial coefficients with a negative lower index when $p=0$, or a negative upper index in rank zero. The solution sets out-of-range binomial coefficients to zero and gives the unit-line interpretation for $n=0$. This completes the boundary conventions; it does not claim that the printed formula is already complete with undefined notation.
