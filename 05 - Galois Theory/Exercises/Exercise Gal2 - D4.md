---
title: "Exercise Gal2: D4 Extensions as Splitting Fields of Even Quartics"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - dihedral-group
  - splitting-field
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.18, printed p. 509, PDF p. 521"
created: 2026-05-01
---

# Exercise Gal2: D4 Extensions as Splitting Fields of Even Quartics

## Problem Statement

> [!question] Exercise 9.18 (as printed)
> Prove that any Galois extension whose Galois group is the dihedral group $D_4$ is the splitting field of a polynomial of the form
> $$
> x^4+bx^2+c.
> $$

> [!warning] Source issue
> The printed statement does not mention the characteristic of the base field. In characteristic $2$, every polynomial $x^4+bx^2+c$ has zero derivative and cannot have a nontrivial separable splitting field. The intended statement therefore requires $\operatorname{char}F\ne2$; this includes the rational-number setting used throughout Artin's examples in §16.9.

## Hints

> [!hint]- Hint 1
> Present $D_4$ as $\langle\sigma,\tau\mid \sigma^4=\tau^2=1,\ \tau\sigma\tau=\sigma^{-1}\rangle$ and use the central involution $z=\sigma^2$.

> [!hint]- Hint 2
> In the quartic fixed field $L=K^{\langle\tau\rangle}$, choose a nonzero element $\alpha$ satisfying $z(\alpha)=-\alpha$.

> [!hint]- Hint 3
> The orbit of $\alpha$ is $\{\alpha,\sigma(\alpha),-\alpha,-\sigma(\alpha)\}$, and the reflection subgroup $\langle\tau\rangle$ has trivial core in $D_4$.

## Solution

> [!success]- Solution
> Let $K/F$ be Galois with
> $$
> G=\operatorname{Gal}(K/F)\cong
> D_4=\langle\sigma,\tau\mid
> \sigma^4=\tau^2=1,\ \tau\sigma\tau=\sigma^{-1}\rangle,
> $$
> and assume $\operatorname{char}F\ne2$. Put $z=\sigma^2$, the central involution of $G$, and let
> $$
> H=\langle\tau\rangle,
> \qquad
> L=K^H.
> $$
> Since $[G:H]=4$, one has $[L:F]=4$. The element $z$ commutes with $H$, so it acts on $L$. Its fixed field inside $L$ is
> $$
> L^{\langle z\rangle}=K^{\langle z,\tau\rangle},
> $$
> and $L/L^{\langle z\rangle}$ is quadratic. Choose $\theta\in L$ not fixed by $z$ and set
> $$
> \alpha=\theta-z(\theta).
> $$
> Then $\alpha\ne0$, $\tau(\alpha)=\alpha$, and, because the characteristic is not $2$,
> $$
> z(\alpha)=-\alpha.
> $$
>
> The stabilizer of $\alpha$ contains $H$. It cannot contain $z$, and every subgroup properly containing the reflection subgroup $H$ also contains $z$. Hence
> $$
> \operatorname{Stab}_G(\alpha)=H.
> $$
> The orbit of $\alpha$ therefore has four elements. Writing $\alpha'=\sigma(\alpha)$, it is
> $$
> \alpha,\quad \alpha',\quad -\alpha,\quad -\alpha'.
> $$
> Thus the irreducible polynomial of $\alpha$ over $F$ is
> $$
> \begin{aligned}
> f(x)
> &=(x-\alpha)(x+\alpha)(x-\alpha')(x+\alpha')\\
> &=(x^2-\alpha^2)(x^2-\alpha'^2)\\
> &=x^4+bx^2+c,
> \end{aligned}
> $$
> where
> $$
> b=-(\alpha^2+\alpha'^2),
> \qquad
> c=\alpha^2\alpha'^2.
> $$
> These coefficients lie in $F$ because the product is the orbit polynomial of $\alpha$.
>
> Finally, the splitting field of $f$ inside $K$ is fixed by the kernel of the action of $G$ on the four conjugates. That kernel is the core
> $$
> \bigcap_{g\in G}gHg^{-1}.
> $$
> The conjugates of a reflection subgroup in $D_4$ have trivial intersection, so the core is trivial. Therefore the splitting field is all of $K$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Galois Correspondence]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[05 - Galois Theory/Concepts/Quartic Resolvents and Galois Groups|Quartic Resolvents and Galois Groups]]

## Notes

The exercise statement is source material from [S1, Ch. 16, §9, Ex. 9.18, printed p. 509, PDF p. 521]. The proof is an independent construction from the subgroup lattice of $D_4$ and the Fundamental Theorem of Galois Theory. The characteristic-$2$ obstruction is not stated in the printed exercise and is recorded rather than silently repaired.
