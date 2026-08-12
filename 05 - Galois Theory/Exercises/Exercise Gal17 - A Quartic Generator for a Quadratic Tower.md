---
title: "Exercise Gal17: A Quartic Generator for a Quadratic Tower"
topic: galois-theory
difficulty: advanced
status: not-started
tags: [exercise, galois-theory, primitive-elements]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 6, Ex. 6.3, printed p. 507, PDF p. 519"
created: 2026-08-12
---

# Exercise Gal17: A Quartic Generator for a Quadratic Tower

## Problem Statement

> [!question] Exercise 6.3
> Let $K\supset L\supset F$ be a chain of degree-two extensions. Show $K$ is generated over $F$ by a root of an irreducible quartic $x^4+bx^2+c$.

## Hints

> [!hint]- Hint 1
> Write $L=F(\sqrt d)$, $K=L(\sqrt{r+s\sqrt d})$, and take a suitable trace-zero element.

## Solution

> [!success]- Solution
> Assume $\operatorname{char}F\ne2$, as the requested form implicitly requires. Write $L=F(\sqrt d)$ and choose $\alpha\in K\setminus L$ with $\alpha^2=r+s\sqrt d\in L$. If $s=0$, replace $\alpha$ by $\alpha+\sqrt d$; its square has a nonzero $\sqrt d$-coefficient and still generates $K$.
>
> Then
> $$
> (\alpha^2-r)^2=s^2d,
> $$
> so $\alpha$ satisfies
> $$
> x^4-2rx^2+(r^2-s^2d)=0.
> $$
> Moreover $\sqrt d=(\alpha^2-r)/s\in F(\alpha)$, and then $K=L(\alpha)=F(\alpha)$. Hence the minimal polynomial has degree $[K:F]=4$, so the displayed even quartic is irreducible.

## Related Concepts

- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

The characteristic-$2$ obstruction is explicit; Artin's printed exercise omits it.
