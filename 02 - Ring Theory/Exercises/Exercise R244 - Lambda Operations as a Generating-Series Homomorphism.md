---
title: "Exercise R244: Lambda Operations as a Generating-Series Homomorphism"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 21, printed p. 218, PDF p. 233"
created: 2026-09-06
---

# Exercise R244: Lambda Operations as a Generating-Series Homomorphism

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 21
> **Shared source setup (printed pp. 217-218).** Let $K$ be a commutative ring. A family of maps $\lambda^i:K\to K$ for $i\ge0$ satisfies
> $$
> \lambda^0(x)=1,\qquad\lambda^1(x)=x,\qquad
> \lambda^n(x+y)=\sum_{i=0}^n\lambda^i(x)\lambda^{n-i}(y).
> $$
> Lang calls these lambda operations and calls $K$ a lambda-ring in this exercise setup. Put $\lambda_t(x)=\sum_{i\ge0}\lambda^i(x)t^i$.
>
> Show that $x\mapsto\lambda_t(x)$ is a homomorphism from the additive group of $K$ to the multiplicative group $1+tK[[t]]$. Conversely, show that every such homomorphism with $\lambda_t(x)=1+xt+\text{higher terms}$ gives lambda operations.

## Hints

> [!hint]- Hint 1
> The coefficient of $t^n$ in a Cauchy product is the sum in the defining addition identity.

> [!hint]- Hint 2
> Every formal series with constant coefficient $1$ is invertible.

## Solution

> [!success]- Solution
> ### Approach
> The coefficient of $t^n$ in a Cauchy product is the sum in the defining addition identity.
>
> ### Proof
> A series $1+\sum_{i\ge1}a_it^i$ has a unique inverse with constant coefficient $1$: solving the coefficient of $t^n$ recursively gives $b_n=-\sum_{i=1}^na_ib_{n-i}$ with $b_0=1$. Thus $1+tK[[t]]$ is a multiplicative group.
>
> The source's coefficient identity is exactly
> $$
> \lambda_t(x+y)=\lambda_t(x)\lambda_t(y).
> $$
> Setting $x=y=0$ and cancelling the unit $\lambda_t(0)$ gives $\lambda_t(0)=1$. Setting $y=-x$ then gives $\lambda_t(-x)=\lambda_t(x)^{-1}$. The map is therefore a group homomorphism.
>
> Conversely, given such a homomorphism, define $\lambda^i(x)$ to be its $t^i$ coefficient. The constant and linear terms give $\lambda^0(x)=1$ and $\lambda^1(x)=x$. Comparing each coefficient in the homomorphism identity gives the addition axiom for every $n$. These constructions are inverse.

## Related Concepts

- [[02 - Ring Theory/Concepts/Lambda and Gamma Operations|Lambda and Gamma Operations]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Terminology boundary:** These are additive or pre-lambda operations. They do not by themselves impose the multiplication/composition identities of a special lambda-ring, nor the normalization $\lambda_t(1)=1+t$. This matters for IV.23-IV.24.
- **Shared definition provenance:** [S2, Ch. IV, exercise preamble, printed pp. 217-218, PDF pp. 232-233].

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 21, printed p. 218, PDF p. 233]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
