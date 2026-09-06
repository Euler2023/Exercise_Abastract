---
title: "Exercise R234: Affine Substitutions over an Integral Domain"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 8, printed p. 214, PDF p. 229"
created: 2026-09-06
---

# Exercise R234: Affine Substitutions over an Integral Domain

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 8
> Let $A$ be a commutative entire ring and $X$ a variable over $A$. Let $a,b\in A$ and assume that $a$ is a unit in $A$. Show that $X\mapsto aX+b$ extends to a unique automorphism of $A[X]$ inducing the identity on $A$. What is the inverse automorphism?

## Hints

> [!hint]- Hint 1
> Define the image of a polynomial by substitution.

> [!hint]- Hint 2
> Solve $Y=aX+b$ for $X$ using the unit $a$.

## Solution

> [!success]- Solution
> ### Approach
> Define the image of a polynomial by substitution.
>
> ### Proof
> Define $\sigma(\sum c_iX^i)=\sum c_i(aX+b)^i$. Distributivity shows that substitution preserves sums and products, and it fixes each $c\in A$. Every $A$-algebra homomorphism is determined by its value on $X$, so this is the unique such extension.
>
> The inverse is substitution by $a^{-1}X-a^{-1}b$, because
> $$
> a(a^{-1}X-a^{-1}b)+b=X,
> \qquad a^{-1}(aX+b)-a^{-1}b=X.
> $$
> The two substitution maps compose to the identity on $A$ and on $X$, hence on every polynomial. Therefore $\sigma$ is an automorphism.

## Related Concepts

- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Ring Homomorphisms|Ring Homomorphisms]]

## Notes

- **Boundary:** “Entire” means integral domain. This construction in fact works over any commutative unital ring when $a$ is a unit.

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 8, printed p. 214, PDF p. 229]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
