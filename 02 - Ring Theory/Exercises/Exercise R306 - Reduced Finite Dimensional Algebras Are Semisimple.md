---
title: "Exercise R306: Reduced Finite Dimensional Algebras Are Semisimple"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - artinian-rings
  - semisimplicity
  - reduced-rings
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 7, printed p. 661, PDF p. 676"
created: 2026-09-29
---

# Exercise R306: Reduced Finite Dimensional Algebras Are Semisimple

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 7
> Let $R$ be a finite dimensional commutative algebra over a field $k$. If $R$ has no nilpotent element $\ne0$, show that $R$ is semisimple.

> [!warning] Source issue: nonzero-ring convention
> Lang's definition of a semisimple ring requires $1\ne0$ [Ch. XVII, §4, printed p. 651, PDF p. 666]. If zero algebras are allowed, the printed statement therefore needs $R\ne0$: the zero algebra satisfies the displayed hypotheses but is excluded by that definition. The proof uses the intended nonzero-algebra case. With the extended convention permitting a zero semisimple ring, the zero case holds as well.

## Hints

> [!hint]- Hint 1: Use finite dimension to obtain a chain condition
> Every left ideal is a $k$-vector subspace, so a strictly descending chain of left ideals strictly decreases dimension.

> [!hint]- Hint 2: Compare two meanings of nilpotence
> In an Artinian ring, the Jacobson radical $N$ satisfies $N^r=0$ for some $r\ge1$. Then each element of $N$ is nilpotent. Apply the zero-radical criterion for semisimplicity.

## Solution

> [!success]- Independent deduction from the preceding radical results
> Assume $R\ne0$, as required by Lang's convention. Let $d=\dim_kR$. Every left ideal is a $k$-vector subspace of $R$, and every strict inclusion in a descending chain lowers its dimension. There can be at most $d$ strict decreases, so $R$ is left Artinian.
>
> Put $N=J(R)$. By the radical-nilpotence result proved in R304, there is an integer $r\ge1$ such that $N^r=0$. For each $x\in N$ we then have
>
> $$
> x^r\in N^r=0.
> $$
>
> Thus every element of $N$ is nilpotent. The hypothesis that $R$ has no nonzero nilpotent element forces every such $x$ to be zero, and hence $N=0$.
>
> The criterion proved in R303 now applies: a nonzero left Artinian ring with zero Jacobson radical is semisimple. Explicitly, the descending chain condition reduces the intersection of its maximal left ideals to a finite intersection equal to zero; the resulting diagonal map embeds the regular module $R$ into a finite sum of simple modules, which makes $R$ semisimple. This proves the required conclusion.
>
> In the present commutative case, R305 further gives a finite product of fields. Each factor is a quotient of the finite dimensional $k$-algebra $R$, so it is a finite extension of $k$. Separability of those extensions is not asserted or needed.

## Related Concepts

- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Semisimple Modules and Rings|Semisimple Modules and Rings]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Exercises/Exercise R303 - Artinian Rings with Zero Radical Are Semisimple|Exercise R303]]
- [[02 - Ring Theory/Exercises/Exercise R304 - Nilpotent Ideals and the Radical of an Artinian Ring|Exercise R304]]
- [[02 - Ring Theory/Exercises/Exercise R305 - Commutative Semisimple Rings Are Products of Fields|Exercise R305]]

## Notes

- **Source and proof status:** The full statement was checked at [S2, Ch. XVII, Ex. 7, printed p. 661, PDF p. 676], and the nonzero-ring convention at [S2, Ch. XVII, §4, printed p. 651, PDF p. 666]. The solution is an independent deduction from the completely proved radical-nilpotence and semisimplicity criteria in R303–R304. The final product description uses R305.
- **Boundary:** Reducedness means absence of nonzero nilpotent elements in $R$ itself. It does not say that every scalar extension remains reduced. In particular, a finite inseparable field extension is already a field and is semisimple as a ring.
