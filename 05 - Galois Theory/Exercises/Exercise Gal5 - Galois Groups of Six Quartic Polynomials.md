---
title: "Exercise Gal5: Galois Groups of Six Quartic Polynomials"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - quartic-polynomials
  - cyclotomic-extensions
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.12, printed p. 509, PDF p. 521"
created: 2026-08-10
---

# Exercise Gal5: Galois Groups of Six Quartic Polynomials

## Problem Statement

> [!question] Exercise 9.12
> Determine the Galois groups of the following polynomials over $\mathbb Q$:
> $$
> \begin{aligned}
> &\text{(a) }x^4+4x^2+2, &&\text{(b) }x^4+2x^2+4, &&\text{(c) }x^4+1,\\
> &\text{(d) }x^4+x+1, &&\text{(e) }x^4+x^3+x^2+x+1, &&\text{(f) }x^4+x^2+1.
> \end{aligned}
> $$

## Hints

> [!hint]- Hint 1
> For the even quartics, first solve the quadratic equation in $x^2$.

> [!hint]- Hint 2
> Recognize parts (c), (e), and (f) as cyclotomic or products of cyclotomic polynomials.

> [!hint]- Hint 3
> For part (d), compute the discriminant and Artin resolvent cubic.

## Solution

> [!success]- Solution
> **(a)** Let $s=\sqrt2$ and choose roots $\alpha,\beta$ with
> $$
> \alpha^2=-2+s,\qquad \beta^2=-2-s,\qquad \alpha\beta=-s.
> $$
> The polynomial is irreducible over $\mathbb Q$ by Eisenstein's criterion at $2$. Moreover $s=\alpha^2+2$ and $\beta=-s/\alpha$, so its splitting field is $K=\mathbb Q(\alpha)$ and $[K:\mathbb Q]=4$. An automorphism sending $\alpha$ to $\beta$ acts on the roots by
> $$
> \alpha\longmapsto\beta\longmapsto-\alpha
> \longmapsto-\beta\longmapsto\alpha.
> $$
> Hence
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong C_4.
> $$
>
> **(b)** Choose
> $$
> \alpha^2=-1+i\sqrt3,\qquad
> \beta^2=-1-i\sqrt3,\qquad
> \alpha\beta=2.
> $$
> To prove irreducibility, suppose that the monic quartic factors over $\mathbb Q$. Gauss's lemma and the absence of rational roots reduce the problem to
> $$
> x^4+2x^2+4=(x^2+ax+b)(x^2-ax+d),
> \qquad a,b,d\in\mathbb Q.
> $$
> The coefficient of $x$ gives $a(d-b)=0$. If $a=0$, then $b+d=2$ and $bd=4$, which is impossible because $T^2-2T+4$ has discriminant $-12$. If $b=d$, then $b^2=4$ and $2b-a^2=2$; neither $b=2$ nor $b=-2$ gives a rational value of $a$. Hence the quartic is irreducible.
>
> Now $K=\mathbb Q(\alpha)$ because $i\sqrt3=\alpha^2+1$ and $\beta=2/\alpha$. Thus $[K:\mathbb Q]=4$. The automorphism exchanging $\alpha$ and $\beta$ has order $2$, and it commutes with simultaneous negation of both roots. Therefore
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong C_2\times C_2=D_2.
> $$
>
> **(c)** The polynomial $x^4+1=\Phi_8(x)$ has splitting field $\mathbb Q(\zeta_8)$. Hence
> $$
> \operatorname{Gal}(\mathbb Q(\zeta_8)/\mathbb Q)
> \cong(\mathbb Z/8\mathbb Z)^\times
> \cong C_2\times C_2=D_2.
> $$
>
> **(d)** Modulo $2$, the polynomial $x^4+x+1$ has no root and is not divisible by the only irreducible quadratic $x^2+x+1$; it is therefore irreducible over $\mathbb F_2$, and hence over $\mathbb Q$. In Artin's convention its resolvent cubic is
> $$
> g(y)=y^3-4y-1,
> $$
> which has no rational root and is therefore irreducible. The quartic discriminant is $229$, which is not a square. Artin's quartic table then gives
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong S_4.
> $$
>
> **(e)** One has
> $$
> x^4+x^3+x^2+x+1=\Phi_5(x).
> $$
> Its splitting field is $\mathbb Q(\zeta_5)$, and
> $$
> \operatorname{Gal}(\mathbb Q(\zeta_5)/\mathbb Q)
> \cong(\mathbb Z/5\mathbb Z)^\times
> \cong C_4.
> $$
>
> **(f)** This polynomial is reducible:
> $$
> x^4+x^2+1=(x^2+x+1)(x^2-x+1).
> $$
> Both factors split in $\mathbb Q(\sqrt{-3})$, so the splitting field is that quadratic field and
> $$
> \operatorname{Gal}(K/\mathbb Q)\cong C_2.
> $$
>
> In summary:
> $$
> \text{(a) }C_4,\qquad
> \text{(b) }D_2,\qquad
> \text{(c) }D_2,\qquad
> \text{(d) }S_4,\qquad
> \text{(e) }C_4,\qquad
> \text{(f) }C_2.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]

## Notes

The solutions are independent derivations using Artin's even-quartic analysis and resolvent table [S1, Ch. 16, §16.9, printed pp. 493–496, PDF pp. 505–508]. An exact SageMath 9.0 check over $\mathbb Q$ confirmed the irreducibility, discriminants, group orders, and structures in parts (a)–(e), and the factorization in part (f); that computation verifies these finite examples but does not replace the arguments above.
