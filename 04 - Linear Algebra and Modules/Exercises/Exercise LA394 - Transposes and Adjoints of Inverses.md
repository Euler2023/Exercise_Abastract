---
title: "Exercise LA394: Transposes and Adjoints of Inverses"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - bilinear-forms
  - hermitian-forms
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Matrices and Linear Maps, Exercise 2, printed p. 545, PDF p. 560"
created: 2026-09-26
---

# Exercise LA394: Transposes and Adjoints of Inverses

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 2
> (a) Let $A$ be an invertible matrix in a commutative ring $R$. Show that $({}^tA)^{-1}={}^t(A^{-1})$.
>
> (b) Let $f$ be a non-singular bilinear form on the module $E$ over $R$. Let $A$ be an $R$-automorphism of $E$. Show that $({}^tA)^{-1}={}^t(A^{-1})$. Prove the same thing in the hermitian case, i.e. $(A^*)^{-1}=(A^{-1})^*$.

## Hints

> [!hint]- Hint 1
> Transposition and the adjoint reverse products.

> [!hint]- Hint 2
> Apply the operation to both equations $AA^{-1}=I$ and $A^{-1}A=I$.

## Solution

> [!success]- Independent derivation
> **(a)** For square matrices over a commutative ring, $\,{}^t(BC)={}^tC\,{}^tB$. Hence
> $$
> {}^t(A^{-1})\,{}^tA={}^t(AA^{-1})=I,\qquad
> {}^tA\,{}^t(A^{-1})={}^t(A^{-1}A)=I.
> $$
> Thus $\,{}^t(A^{-1})$ is the two-sided inverse of $\,{}^tA$.
>
> **(b)** By non-singularity, the adjoint $\,{}^tA$ is characterized uniquely by $f(Ax,y)=f(x,{}^tAy)$. For two maps $A,B$ admitting adjoints,
> $$
> f(ABx,y)=f(Bx,{}^tAy)=f(x,{}^tB\,{}^tAy),
> $$
> so $\,{}^t(AB)={}^tB\,{}^tA$. Applying this to $AA^{-1}=A^{-1}A=I$ gives both inverse identities and therefore $({}^tA)^{-1}={}^t(A^{-1})$.
>
> For a non-singular hermitian form, define $A^*$ by $f(Ax,y)=f(x,A^*y)$ with the convention that $f$ is linear in its first variable; the opposite convention gives the same product-reversal law. The same calculation yields $(AB)^*=B^*A^*$ and $I^*=I$, whence $(A^*)^{-1}=(A^{-1})^*$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]

## Notes

- The two parts and the hermitian identity were checked against [S2, Ch. XIII, Exercise 2, printed p. 545, PDF p. 560]. The solution is independently derived in this vault.
- For a general module, the proof uses the source's “non-singular” hypothesis to ensure that the relevant adjoints exist; it does not assert that every endomorphism of an arbitrary degenerate pairing has an adjoint.
