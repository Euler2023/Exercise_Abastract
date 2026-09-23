---
title: "Exercise R287: Idempotents in a Local Ring"
topic: ring-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - ring-theory
  - local-rings
  - idempotents
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 8, printed p. 443, PDF p. 458"
created: 2026-09-22
---

# Exercise R287: Idempotents in a Local Ring

## Problem Statement

> [!question] Lang, Chapter X, Exercise 8
> Let $A$ be a local ring. Show that any idempotent $\ne0$ in $A$ is necessarily the unit element. (An **idempotent** is an element $e\in A$ such that $e^2=e$.)

## Hints

> [!hint]- Hint 1
> Rewrite the idempotent equation as $e(1-e)=0$.

> [!hint]- Hint 2
> In a local ring with maximal ideal $\mathfrak m$, every element outside $\mathfrak m$ is a unit. The elements $e$ and $1-e$ cannot both lie in $\mathfrak m$.

## Solution

> [!success]- Independently derived solution
> Let $\mathfrak m$ be the unique maximal ideal of $A$, and let $e^2=e$.
>
> First, an element of $A$ is a nonunit precisely when it lies in $\mathfrak m$. A member of a proper ideal cannot be a unit. Conversely, if $a$ is a nonunit, then $(a)$ is a proper ideal, hence is contained in a maximal ideal; uniqueness forces $a\in\mathfrak m$.
>
> If $e\notin\mathfrak m$, then $e$ is a unit. Multiplying $e^2=e$ by its inverse yields $e=1$.
>
> If $e\in\mathfrak m$, then $1-e\notin\mathfrak m$, since otherwise $1=e+(1-e)$ would lie in $\mathfrak m$. Thus $1-e$ is a unit. Multiplying $e(1-e)=0$ by its inverse gives $e=0$.
>
> The only idempotents are therefore $0$ and $1$, and every nonzero idempotent is $1$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Source status:** The statement and parenthetical definition were visually checked at [S2, Ch. X, Ex. 8, printed p. 443, PDF p. 458]. The proof is independent.
- **Convention and input:** Rings are commutative with identity, and a local ring has exactly one maximal ideal. The proof uses the maximal-ideal existence theorem for a proper ideal, as in the linked ideal concepts.
- **Meaning of the conclusion:** “The unit element” means the identity $1$, a stronger conclusion than merely saying that $e$ is invertible.
