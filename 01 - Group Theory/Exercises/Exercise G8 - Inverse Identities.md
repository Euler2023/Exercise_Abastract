---
title: "Exercise G8: Inverse Identities"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
  - inverses
  - proof
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 1, Ex. 1.2, printed p. 69, PDF p. 81"
created: 2026-08-10
---

# Exercise G8: Inverse Identities

## Problem Statement

> [!question] Exercise
> Prove the standard properties of inverses for an associative law with identity. In particular, prove that:
>
> 1. an inverse of an element is unique;
> 2. $e^{-1}=e$;
> 3. $(a^{-1})^{-1}=a$;
> 4. $(ab)^{-1}=b^{-1}a^{-1}$.

## Hints

> [!hint]- Hint 1
> If $b$ and $c$ are both inverses of $a$, insert the identity and use associativity to rewrite $b=b(ac)$.

> [!hint]- Hint 2
> To identify the inverse of a product, multiply $ab$ by $b^{-1}a^{-1}$ on both sides.

## Solution

> [!success]- Solution
> Let $e$ denote the identity element.
>
> ### 1. Uniqueness of Inverses
> Suppose $b$ and $c$ are both inverses of $a$. Thus
> $$ba=ab=e,\qquad ca=ac=e.$$
> Using associativity,
> $$b=be=b(ac)=(ba)c=ec=c.$$
> Hence the inverse of $a$ is unique.
>
> ### 2. The Inverse of the Identity
> Since
> $$ee=e,$$
> the element $e$ is an inverse of itself. By uniqueness,
> $$e^{-1}=e.$$
>
> ### 3. The Inverse of an Inverse
> The equations
> $$aa^{-1}=a^{-1}a=e$$
> show that $a$ is an inverse of $a^{-1}$. Therefore
> $$(a^{-1})^{-1}=a.$$
>
> ### 4. The Inverse of a Product
> We compute
> $$(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=aea^{-1}=aa^{-1}=e,$$
> and similarly
> $$(b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=b^{-1}eb=b^{-1}b=e.$$
> Thus $b^{-1}a^{-1}$ is the inverse of $ab$. By uniqueness,
> $$(ab)^{-1}=b^{-1}a^{-1}.\qquad\square$$

## Related Concepts

- [[01 - Group Theory/Concepts/Binary Operations and Associativity|Binary Operations and Associativity]]
- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Exercises/Exercise G2 - Uniqueness of Inverses|Exercise G2: Uniqueness of Inverses]]

## Notes

The order reverses in $(ab)^{-1}$ because the factor $b$ must be undone before the factor $a$.

**Source status:** Exercise statement from [S1, Ch. 2, §1, Ex. 1.2, printed p. 69, PDF p. 81]. The solution above derives the inverse identities from associativity and the identity axioms.
