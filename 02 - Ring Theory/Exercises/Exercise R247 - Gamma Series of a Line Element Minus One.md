---
title: "Exercise R247: Gamma Series of a Line Element Minus One"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 24, printed p. 218, PDF p. 233"
created: 2026-09-06
---

# Exercise R247: Gamma Series of a Line Element Minus One

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 24
> **Shared source setup (printed pp. 217-218).** Let $K$ be a commutative ring. A family of maps $\lambda^i:K\to K$ for $i\ge0$ satisfies
> $$
> \lambda^0(x)=1,\qquad\lambda^1(x)=x,\qquad
> \lambda^n(x+y)=\sum_{i=0}^n\lambda^i(x)\lambda^{n-i}(y).
> $$
> Lang calls these lambda operations and calls $K$ a lambda-ring in this exercise setup. Put $\lambda_t(x)=\sum_{i\ge0}\lambda^i(x)t^i$.
>
> Put $\gamma_t(x)=\lambda_{t/(1-t)}(x)=\sum_{i\ge0}\gamma^i(x)t^i$.
>
> Assume $\lambda^i(u)=0$ for $i>1$. Show:
>
> (a) $\gamma_t(u-1)=1+(u-1)t$.
>
> (b) $\gamma_t(1-u)=\sum_{i=0}^\infty(1-u)^it^i$.

> [!warning] Source issue / scope clarification
> This exercise uses IV.23(b)-(c), which need the extra normalization $\lambda_t(1)=1+t$. The condition on $u$ alone does not imply that normalization. The printed problem is preserved above; the solution states the corrected setting and supplies a counterexample without it.

## Hints

> [!hint]- Hint 1
> Use $\lambda_t(u)=1+ut$ and the normalized value $\lambda_t(1)=1+t$.

> [!hint]- Hint 2
> Negation becomes inversion under the generating-series homomorphism.

## Solution

> [!success]- Solution
> ### Approach
> Use $\lambda_t(u)=1+ut$ and the normalized value $\lambda_t(1)=1+t$.
>
> ### Proof
> As in IV.23, first impose the required normalization $\lambda_t(1)=1+t$. The printed hypothesis gives $\lambda_t(u)=1+ut$. Therefore
> $$
> \lambda_s(u-1)=\frac{1+us}{1+s}.
> $$
> Substitute $s=t/(1-t)$ to obtain
> $$
> \gamma_t(u-1)=\frac{1+ut/(1-t)}{1+t/(1-t)}=1+(u-1)t,
> $$
> proving (a). By the homomorphism identity,
> $$
> \gamma_t(1-u)=\gamma_t(u-1)^{-1}
> =\frac1{1-(1-u)t}=\sum_{i\ge0}(1-u)^it^i.
> $$
> The last equality is the formal geometric-series identity, valid in every commutative ring.
>
> Without the normalization, use $K=\mathbb Q$, $\lambda_t(x)=\exp(xt)$, and $u=0$. Then all $\lambda^i(u)$ vanish for $i>1$, but $\gamma_t(-1)=\exp(-t/(1-t))\ne1-t$. Thus the warning is needed even with the printed condition on $u$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Lambda and Gamma Operations|Lambda and Gamma Operations]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Exercises/Exercise R246 - Gamma Operations and the Missing Normalization|R246 — Gamma Operations and the Missing Normalization]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 24, printed p. 218, PDF p. 233]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
