---
title: "Exercise R246: Gamma Operations and the Missing Normalization"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 23, printed p. 218, PDF p. 233"
created: 2026-09-06
---

# Exercise R246: Gamma Operations and the Missing Normalization

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 23
> **Shared source setup (printed pp. 217-218).** Let $K$ be a commutative ring. A family of maps $\lambda^i:K\to K$ for $i\ge0$ satisfies
> $$
> \lambda^0(x)=1,\qquad\lambda^1(x)=x,\qquad
> \lambda^n(x+y)=\sum_{i=0}^n\lambda^i(x)\lambda^{n-i}(y).
> $$
> Lang calls these lambda operations and calls $K$ a lambda-ring in this exercise setup. Put $\lambda_t(x)=\sum_{i\ge0}\lambda^i(x)t^i$.
>
> Put $\gamma_t(x)=\lambda_{t/(1-t)}(x)=\sum_{i\ge0}\gamma^i(x)t^i$.
>
> Show:
>
> (a) For every $n\ge0$, $\gamma^n(x+y)=\sum_{i=0}^n\gamma^i(x)\gamma^{n-i}(y)$.
>
> (b) $\gamma_t(1)=1/(1-t)$.
>
> (c) $\gamma_t(-1)=1-t$.

> [!warning] Source issue / scope clarification
> The printed preamble does not require $\lambda_t(1)=1+t$. Part (a) follows from its axioms, but (b)-(c) do not. The solution gives a counterexample and then proves (b)-(c) under that explicitly added normalization.

## Hints

> [!hint]- Hint 1
> Part (a) follows by coefficient comparison in the multiplicative identity for $\gamma_t$.

> [!hint]- Hint 2
> For (b)-(c), check exactly which value of $\lambda_t(1)$ is needed.

## Solution

> [!success]- Solution
> ### Approach
> Part (a) follows by coefficient comparison in the multiplicative identity for $\gamma_t$.
>
> ### Proof
> **(a)** By IV.22, $\gamma_t(x+y)=\gamma_t(x)\gamma_t(y)$. The coefficient of $t^n$ is the claimed finite sum.
>
> **Counterexample to the unrestricted (b)-(c).** On $K=\mathbb Q$, define $\lambda_t(x)=\exp(xt)$, interpreted as a formal series. Then $\lambda^0(x)=1$, $\lambda^1(x)=x$, and the exponential addition identity proves all the printed lambda axioms. But
> $$
> \gamma_t(1)=\exp(t/(1-t))=1+t+\tfrac32t^2+\cdots,
> $$
> which differs from $1/(1-t)=1+t+t^2+\cdots$. Its inverse differs from $1-t$ too.
>
> **(b)-(c), corrected normalized setting.** Assume $\lambda_t(1)=1+t$, equivalently $\lambda^i(1)=0$ for $i>1$. Then
> $$
> \gamma_t(1)=1+\frac{t}{1-t}=\frac1{1-t}.
> $$
> Because $\gamma_t$ is a group homomorphism, $\gamma_t(-1)=\gamma_t(1)^{-1}=1-t$. Conversely (b), followed by the inverse substitution $t=s/(1+s)$, gives $\lambda_s(1)=1+s$. Thus the missing normalization is precisely what (b) requires.

## Related Concepts

- [[02 - Ring Theory/Concepts/Lambda and Gamma Operations|Lambda and Gamma Operations]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[02 - Ring Theory/Exercises/Exercise R244 - Lambda Operations as a Generating-Series Homomorphism|R244 — Lambda Operations as a Generating-Series Homomorphism]]
- [[02 - Ring Theory/Exercises/Exercise R245 - Compositional Inversion and Grothendieck Power Series|R245 — Compositional Inversion and Grothendieck Power Series]]

## Notes

- **Shared definition provenance:** [S2, Ch. IV, exercise preamble, printed pp. 217-218, PDF pp. 232-233]. No special lambda-ring multiplication identities are assumed.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 23, printed p. 218, PDF p. 233]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
