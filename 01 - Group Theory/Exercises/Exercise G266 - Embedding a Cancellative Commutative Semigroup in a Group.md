---
title: "Exercise G266: Embedding a Cancellative Commutative Semigroup in a Group"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - semigroups
  - group-completion
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, Miscellaneous Exercises, Ex. M.2, printed p. 358, PDF p. 370"
created: 2026-08-27
---

# Exercise G266: Embedding a Cancellative Commutative Semigroup in a Group

## Problem Statement

> [!question] Exercise M.2
> Let $S$ be a commutative semigroup with identity satisfying cancellation: $ab=ac$ implies $b=c$. Prove that $S$ can be embedded into a group.

## Hints

> [!hint]- Hint 1
> Model fractions by pairs $(a,b)$, with $(a,b)\sim(c,d)$ when $ad=bc$.

## Solution

> [!success]- Solution
> On $S\times S$, define $(a,b)\sim(c,d)$ when $ad=bc$. Commutativity and cancellation make this an equivalence relation. Define
>
> $$
> [(a,b)]\cdot[(c,d)]=[(ac,bd)].
> $$
>
> This is well defined and gives an abelian group: the identity is $[(e,e)]$ and the inverse of $[(a,b)]$ is $[(b,a)]$. The map
>
> $$
> S\to G,
> \qquad a\mapsto[(a,e)]
> $$
>
> is a homomorphism. If $[(a,e)]=[(b,e)]$, then $ae=be$, so cancellation gives $a=b$. Hence the map is injective.

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]

## Notes

- **Routing rationale:** The construction's primary object and toolkit are a group completion of a cancellative semigroup, so the note belongs in Group Theory despite its Chapter 11 source.
- **Source status:** The problem is from [S1, Ch. 11, Misc. Exercises, Ex. M.2, printed p. 358, PDF p. 370]. The fraction-pair construction is independent.

