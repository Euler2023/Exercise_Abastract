---
title: "Exercise R103: Restrictions to Three Lines"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - ring-homomorphisms
  - ideals
  - algebraic-geometry
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, Miscellaneous Exercises, Ex. M.5, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise R103: Restrictions to Three Lines

## Problem Statement

> [!question] Exercise M.5
> Define
>
> $$
> \varphi:\mathbb C[x,y]\to\mathbb C[x]\times\mathbb C[y]\times\mathbb C[t]
> $$
>
> by $f(x,y)\mapsto(f(x,0),f(0,y),f(t,t))$. Determine the image and find generators for the kernel.

## Hints

> [!hint]- Hint 1
> First match the restrictions on the two coordinate axes, then inspect the diagonal to first order at the common origin.

## Solution

> [!success]- Solution
> The three kernel conditions are divisibility by $y$, $x$, and $x-y$. These irreducibles are pairwise nonassociate, so
>
> $$
> \ker\varphi=(xy(x-y)).
> $$
>
> Write an image triple as $(p(x),q(y),r(t))$. Necessarily
>
> $$
> p(0)=q(0)=r(0),
> \qquad
> r'(0)=p'(0)+q'(0).
> $$
>
> Conversely, set $c=p(0)=q(0)=r(0)$. Every polynomial with the first two restrictions has the form
>
> $$
> p(x)+q(y)-c+xyh(x,y).
> $$
>
> On the diagonal its value is $p(t)+q(t)-c+t^2h(t,t)$. The two compatibility conditions say exactly that
>
> $$
> r(t)-p(t)-q(t)+c
> $$
>
> is divisible by $t^2$. Choosing $h(x,y)$ to be the resulting quotient with $t$ replaced by $x$ realizes the triple. Thus the displayed two conditions characterize the image.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Method boundary:** Equality of the three constant values alone is insufficient; the three lines meet non-transversely as a union, producing the derivative compatibility.
- **Source status:** The problem is from [S1, Ch. 11, Misc. Exercises, Ex. M.5, printed p. 358, PDF p. 370]. The image and kernel computations are independent.

