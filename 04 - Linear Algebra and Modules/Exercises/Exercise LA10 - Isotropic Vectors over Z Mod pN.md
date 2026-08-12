---
title: "Exercise LA10: Isotropic Vectors over Z Mod p^N"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - module-theory
  - bilinear-forms
source: "Alibaba Global Mathematics Competition 2021 Final, Problem 3 (user-supplied image; English translation)"
created: 2026-08-12
---

# Exercise LA10: Isotropic Vectors over Z Mod p^N

## Problem Statement

> [!question] Problem 3
> Let $p$ be an odd prime, and let $m\geq0$ and $N\geq1$ be integers. Let $A$ be a free $\mathbb{Z}/p^N\mathbb{Z}$-module of rank $2m+1$, equipped with a perfect symmetric bilinear pairing
>
> $$
> (\ ,\ ):A\times A\longrightarrow\mathbb{Z}/p^N\mathbb{Z}.
> $$
>
> Here *perfect* means that the adjoint map
>
> $$
> A\longrightarrow
> \operatorname{Hom}_{\mathbb{Z}/p^N\mathbb{Z}}
> \bigl(A,\mathbb{Z}/p^N\mathbb{Z}\bigr),
> \qquad
> x\longmapsto(x,\cdot),
> $$
>
> is an isomorphism. Determine, as a function of $p,m,N$, the number of elements in
>
> $$
> \{x\in A:(x,x)=0\}.
> $$

## Hints

> [!hint]- Hint 1
> Reduce the pairing modulo $p$. A nondegenerate quadratic form in $2m+1$ variables over $\mathbb{F}_p$ has exactly $p^{2m}$ zeros.

> [!hint]- Hint 2
> Every nonzero isotropic vector modulo $p$ is a nonsingular zero of the quadratic form because $p$ is odd and the pairing is perfect.

> [!hint]- Hint 3
> Count primitive isotropic vectors modulo $p^r$, then write every remaining vector as $x=p^k y$ with $y$ primitive. Treat separately the vectors divisible by $p^{\lceil N/2\rceil}$.

## Solution

> [!success]- Solution
> Set
>
> $$
> n=2m+1,
> \qquad
> q(x)=(x,x).
> $$
>
> We will prove that the required number is
>
> $$
> p^{(2m+1)\lfloor N/2\rfloor}
> +(p^{2m}-1)
> \sum_{k=0}^{\lceil N/2\rceil-1}
> p^{2m(N-1)-(2m-1)k}.
> $$
>
> This formula is also valid for $m=0$; then the sum vanishes and the answer is $p^{\lfloor N/2\rfloor}$.
>
> ### 1. Zeros modulo $p$
>
> Reduction modulo $p$ gives a nondegenerate quadratic form $\bar q$ on the $n$-dimensional space $A/pA$. We first count its zeros.
>
> We briefly justify the form of such a quadratic space. After diagonalization, a nondegenerate binary form is $aX^2+bY^2$. If $-b/a$ is a square, the form is a scalar multiple of a hyperbolic plane and represents every field element. If $-b/a=d$ is a nonsquare, it is a scalar multiple of
>
> $$
> X^2-dY^2=N_{\mathbb{F}_{p^2}/\mathbb{F}_p}(X+Y\sqrt d).
> $$
>
> This norm is surjective on nonzero elements: the multiplicative group $\mathbb{F}_{p^2}^{\times}$ is cyclic of order $p^2-1$, and the norm is the power map $z\mapsto z^{p+1}$, whose image has order $p-1$. Thus every nondegenerate binary quadratic form represents every nonzero element. Consequently every nondegenerate quadratic form of dimension at least $3$ is isotropic: diagonalize it and use its first two variables to represent the negative of the nonzero coefficient of the third.
>
> Given a nonzero isotropic vector $u$, nondegeneracy supplies $v$ with $(u,v)\neq0$. Replacing $v$ by
>
> $$
> v-\frac{(v,v)}{2(u,v)}u
> $$
>
> makes $v$ isotropic without changing $(u,v)$. Thus $u,v$ span a hyperbolic plane, whose orthogonal complement is nondegenerate. Repeating this argument shows that a nondegenerate quadratic space of odd dimension $2m+1$ is an orthogonal sum of $m$ hyperbolic planes and one anisotropic line. Hence, after choosing coordinates,
>
> $$
> \bar q(u,v,z)=u\cdot v+a z^2,
> $$
>
> where $u,v\in\mathbb{F}_p^m$, $z\in\mathbb{F}_p$, and $a\in\mathbb{F}_p^\times$. For fixed $u\neq0$ and $z$, the equation $u\cdot v=-az^2$ has $p^{m-1}$ solutions in $v$. For $u=0$, it forces $z=0$, and then $v$ is arbitrary. Hence the number of zeros is
>
> $$
> (p^m-1)p\,p^{m-1}+p^m=p^{2m}.
> $$
>
> Therefore the number of nonzero isotropic vectors modulo $p$ is $p^{2m}-1$.
>
> ### 2. Primitive lifts
>
> Call a vector modulo $p^r$ *primitive* if it is not divisible by $p$. Let $P_r$ be the number of primitive solutions of $q(x)=0$ modulo $p^r$.
>
> Fix a nonzero isotropic vector $x_1$ modulo $p$. The derivative of $q$ at $x_1$ is the linear functional
>
> $$
> y\longmapsto2(x_1,y).
> $$
>
> It is nonzero because $p$ is odd, the reduced pairing is nondegenerate, and $x_1\neq0$. Suppose $x_r$ is a lift satisfying $q(x_r)=0$ modulo $p^r$. Its lifts modulo $p^{r+1}$ are $x_r+p^r y$ with $y\in A/pA$, and
>
> $$
> q(x_r+p^r y)
> \equiv q(x_r)+2p^r(x_r,y)
> \pmod{p^{r+1}}.
> $$
>
> The condition at the next level is one nonzero linear equation in the $n$ coordinates of $y$, so it has $p^{n-1}=p^{2m}$ solutions. Induction gives
>
> $$
> P_r=(p^{2m}-1)p^{2m(r-1)}.
> $$
>
> ### 3. Stratification by divisibility
>
> If $0\leq k<\lceil N/2\rceil$, consider solutions whose exact $p$-adic order is $k$. Write
>
> $$
> x=p^k y,
> $$
>
> with $y$ primitive modulo $p^{N-k}$. The equation $q(x)=0$ modulo $p^N$ is equivalent to
>
> $$
> q(y)=0\pmod{p^{N-2k}}.
> $$
>
> A primitive solution modulo $p^{N-2k}$ has $p^{nk}$ arbitrary lifts modulo $p^{N-k}$. Therefore the number in this stratum is
>
> $$
> p^{nk}P_{N-2k}
> =(p^{2m}-1)p^{2m(N-1)-(2m-1)k}.
> $$
>
> Finally, every vector in $p^{\lceil N/2\rceil}A$ is automatically isotropic modulo $p^N$, since its quadratic value is divisible by $p^{2\lceil N/2\rceil}$. This submodule has
>
> $$
> p^{n\lfloor N/2\rfloor}
> $$
>
> elements. The strata are disjoint and exhaust all vectors. Summing them yields
>
> $$
> \left|\{x\in A:(x,x)=0\}\right|
> =p^{(2m+1)\lfloor N/2\rfloor}
> +(p^{2m}-1)
> \sum_{k=0}^{\lceil N/2\rceil-1}
> p^{2m(N-1)-(2m-1)k}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Perfect Pairings over Finite Local Rings|Perfect Pairings over Finite Local Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Submodules|Submodules]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- The problem statement is an English translation of the user-supplied image; the screenshot contains only text and formulas, so it is not retained as an attachment.
- The solution is independently derived. The finite-field zero count and the lifting argument are proved in the note; the only imported standard input is the cyclicity of the multiplicative group of a finite field, used to show that the norm $\mathbb{F}_{p^2}^{\times}\to\mathbb{F}_p^{\times}$ is surjective.
- The assumption that $p$ is odd is used when the derivative of $q(x)=(x,x)$ is identified with $2(x,\cdot)$. The characteristic-$2$ case requires a different theory of quadratic forms.
