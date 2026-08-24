---
title: "Exercise LA281: Fischer Inner Product and Harmonic Polynomials"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - harmonic-polynomials
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, Miscellaneous Ex. M.15, printed p. 260, PDF p. 272"
created: 2026-08-24
---

# Exercise LA281: Fischer Inner Product and Harmonic Polynomials

## Problem Statement

> [!question] Miscellaneous Problem M.15
> Let $V=\mathbb R[x,y]$. For $f\in V$, let $\partial_f$ be the constant-coefficient differential operator obtained by substituting $\partial/\partial x$ and $\partial/\partial y$ for $x$ and $y$, and define
>
> $$
> \langle f,g\rangle=\partial_f(g)(0,0).
> $$
>
> **(a)** Prove that this is an inner product and that the monomials form an orthogonal basis.
>
> **(b)** Prove that $\partial_f$ is adjoint to multiplication by $f$.
>
> **(c)** For $f=x^2+y^2$, prove that the space $H$ of harmonic polynomials is orthogonal to $(x^2+y^2)V$, and identify its orthogonal complement.

## Hints

> [!hint]- Hint 1
> Compute the pairing of two monomials.

> [!hint]- Hint 2
> Work degree by degree in part (c), and compare multiplication by $x^2+y^2$ with its adjoint, the Laplacian.

## Solution

> [!success]- Solution
> **(a)** For monomials,
>
> $$
> \langle x^iy^j,x^ky^\ell\rangle
> =i!j!\,\delta_{ik}\delta_{j\ell}.
> $$
>
> Thus the pairing is symmetric and the monomials are orthogonal. If $f=\sum a_{ij}x^iy^j$, then
>
> $$
> \langle f,f\rangle=\sum_{i,j}i!j!\,a_{ij}^2,
> $$
>
> which is positive for $f\ne0$. Hence this is an inner product.
>
> **(b)** Let $m_f$ denote multiplication by $f$. It suffices by linearity to take $f=x^ay^b$ and monomials $g=x^iy^j$, $h=x^ky^\ell$. Direct use of the factorial formula shows
>
> $$
> \langle \partial_f g,h\rangle=\langle g,fh\rangle.
> $$
>
> Indeed, both sides vanish unless $i=k+a$ and $j=\ell+b$, and in that case both equal $i!j!$. Therefore $\partial_f^*=m_f$.
>
> **(c)** For $f=x^2+y^2$,
>
> $$
> \partial_f=\frac{\partial^2}{\partial x^2}+\frac{\partial^2}{\partial y^2}=\Delta.
> $$
>
> Hence $H=\ker\Delta$. By adjointness, if $h\in H$ and $q\in V$, then
>
> $$
> \langle h,(x^2+y^2)q\rangle=\langle \Delta h,q\rangle=0.
> $$
>
> Therefore $(x^2+y^2)V\subseteq H^\perp$.
>
> To prove equality, let $V_d$ be the homogeneous polynomials of degree $d$. Multiplication by $x^2+y^2$ is injective from $V_{d-2}$ to $V_d$, so its adjoint $\Delta:V_d\to V_{d-2}$ is surjective. Consequently, for $d\ge2$,
>
> $$
> \dim(H\cap V_d)=\dim V_d-\dim V_{d-2}=(d+1)-(d-1)=2,
> $$
>
> while $(x^2+y^2)V_{d-2}$ has dimension $d-1$, exactly the dimension of $(H\cap V_d)^\perp$ inside $V_d$. For $d=0,1$, the image term is zero and every polynomial is harmonic. Degree by degree,
>
> $$
> \boxed{H^\perp=(x^2+y^2)V},
> \qquad
> V=H\mathbin{\widehat\oplus}(x^2+y^2)V
> $$
>
> as an orthogonal direct sum of homogeneous components.
>
> $\square$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]

## Notes

- The pairing is often called the Fischer inner product on polynomials.
- The orthogonal decomposition is understood degree by degree; every polynomial has only finitely many homogeneous components.
- **Source status:** The definition and all three parts were visually verified at [S1, Ch. 8, M.15, printed p. 260, PDF p. 272]. The proof is independent.
