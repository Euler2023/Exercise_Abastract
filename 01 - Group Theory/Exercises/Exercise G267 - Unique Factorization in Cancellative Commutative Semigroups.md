---
title: "Exercise G267: Unique Factorization in Cancellative Commutative Semigroups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - semigroups
  - unique-factorization
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Miscellaneous Problems, Ex. M.1, printed p. 381, PDF p. 393"
created: 2026-08-28
---

# Exercise G267: Unique Factorization in Cancellative Commutative Semigroups

## Problem Statement

> [!question] Exercise M.1
> Let $S$ be a commutative semigroup—a set with a commutative and associative law of composition and with an identity element. Suppose the Cancellation Law holds in $S$: if $ab=ac$, then $b=c$. Make the appropriate definitions and extend Proposition 12.2.14(a) to this situation.

## Hints

> [!hint]- Hint 1
> Define units, divisibility, associates, irreducibles, primes, termination, and uniqueness using only the semigroup product and its identity.

> [!hint]- Hint 2
> For uniqueness, cancel an irreducible from two factorizations. For the converse, factor the equation $ab=pc$ when an irreducible $p$ divides $ab$.

## Solution

> [!success]- Solution
> Let $e$ denote the identity of $S$. The appropriate multiplicative definitions are:
>
> - $u$ is a **unit** if $uv=e$ for some $v\in S$.
> - $a$ **divides** $b$, written $a\mid b$, if $b=ac$ for some $c\in S$.
> - $a$ and $b$ are **associates** if $b=ua$ for a unit $u$.
> - A nonunit $p$ is **irreducible** if $p=ab$ implies that $a$ or $b$ is a unit.
> - A nonunit $p$ is **prime** if $p\mid ab$ implies $p\mid a$ or $p\mid b$.
> - **Factoring terminates** if every nonunit is a finite product of irreducibles.
> - $S$ has **unique factorization** if factoring terminates and any two irreducible factorizations have the same number of factors after which, upon reordering, corresponding factors are associates.
>
> Cancellation shows that the two usual definitions of associates agree. Indeed, if $a\mid b$ and $b\mid a$, write $b=ac$ and $a=bd$. Then $a=acd$, so cancellation gives $cd=e$; hence $c$ is a unit and $b=ac$. The converse is immediate.
>
> We claim that, provided factoring terminates,
>
> $$
> S\text{ has unique factorization}
> \quad\Longleftrightarrow\quad
> \text{every irreducible of }S\text{ is prime}.
> $$
>
> Suppose first that every irreducible is prime. Consider two irreducible factorizations
>
> $$
> p_1\cdots p_m=q_1\cdots q_n.
> $$
>
> Since $p_1$ is prime, repeated use of the prime property shows that $p_1\mid q_j$ for some $j$. The irreducibility of $q_j$ then makes $p_1$ and $q_j$ associates. Reorder the $q$'s, absorb the intervening unit into another factor if necessary, and cancel $p_1$. Induction on the number of factors gives $m=n$ and pairs all factors up to association. Thus factorization is unique.
>
> Conversely, assume unique factorization, and let an irreducible $p$ divide $ab$, say
>
> $$
> ab=pc.
> $$
>
> Factor the nonunit terms among $a$, $b$, and $c$ into irreducibles, treating a unit as an empty irreducible product. Comparing the resulting factorizations of $ab$ and $pc$, uniqueness forces $p$ to be associate to an irreducible factor coming from $a$ or from $b$. Therefore $p\mid a$ or $p\mid b$, so $p$ is prime. This proves the semigroup version of Proposition 12.2.14(a).

## Related Concepts

- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]
- [[01 - Group Theory/Exercises/Exercise G266 - Embedding a Cancellative Commutative Semigroup in a Group|Embedding a Cancellative Commutative Semigroup in a Group]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Routing rationale:** The proof uses only a cancellative commutative monoid and its units, so the primary toolkit is semigroup and group-completion theory rather than ring arithmetic.
- **Terminology:** Artin calls this structure a semigroup with identity; in modern terminology it is a commutative monoid.
- **Source status:** The problem is from [S1, Ch. 12, Misc. Problems, Ex. M.1, printed p. 381, PDF p. 393]. Proposition 12.2.14(a) was checked at [S1, Ch. 12, §12.2, printed p. 365, PDF p. 377]. The extension and proof are independent.
