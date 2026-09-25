---
title: "Exercise LA408: Order of SL2 Modulo an Integer"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - matrix-groups
  - modular-arithmetic
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIII, Exercise 19, printed p. 547, PDF p. 562"
created: 2026-09-26
---

# Exercise LA408: Order of SL2 Modulo an Integer

## Problem Statement

> [!question] Lang, Chapter XIII, Exercise 19
> Show that the order of $SL_2(\mathbb Z/N\mathbb Z)$ is equal to
>
> $$
> N^3\prod_{p\mid N}\left(1-\frac1{p^2}\right),
> $$
>
> where the product is taken over all primes dividing $N$.

> [!info] Context
> As in Exercise 18, $N$ is a positive integer.

## Hints

> [!hint]- Hint 1
> First calculate $|SL_2(\mathbb Z/p^e\mathbb Z)|$ by reducing modulo $p$ one power at a time.

> [!hint]- Hint 2
> The kernel between the levels $p^{j+1}$ and $p^j$ is controlled by traceless matrices over $\mathbb F_p$.

> [!hint]- Hint 3
> Use the Chinese remainder theorem to multiply the prime-power counts.

## Solution

> [!success]- Independently derived solution
> Fix a prime $p$ and $e\ge1$. The reduction map $SL_2(\mathbb Z/p^{j+1}\mathbb Z)\to SL_2(\mathbb Z/p^j\mathbb Z)$ is surjective for every $j\ge1$: lift the four entries of a determinant-one matrix arbitrarily, obtaining a matrix $B$ whose determinant is a unit congruent to $1$ modulo $p^j$, then replace $B$ by $B\operatorname{diag}(1,(\det B)^{-1})$.
>
> A matrix in the kernel has the form $I+p^jX$ modulo $p^{j+1}$, where $X\in M_2(\mathbb F_p)$. Its determinant is $1+p^j\operatorname{tr}X$ modulo $p^{j+1}$, because $2j\ge j+1$. Hence it lies in $SL_2$ exactly when $\operatorname{tr}X=0$. There are $p^3$ such matrices, one free choice for each off-diagonal entry and one diagonal entry. Exercise 16 gives $|SL_2(\mathbb F_p)|=p(p^2-1)$, so
>
> $$
> |SL_2(\mathbb Z/p^e\mathbb Z)|
> =p^{3(e-1)}p(p^2-1)
> =p^{3e}\left(1-\frac1{p^2}\right).
> $$
>
> Write $N=\prod_{p\mid N}p^{e_p}$. The Chinese remainder isomorphism $\mathbb Z/N\mathbb Z\cong\prod_{p\mid N}\mathbb Z/p^{e_p}\mathbb Z$ induces the corresponding product decomposition of $SL_2$, since determinant one is checked componentwise. Multiplying the prime-power orders and using $\prod p^{e_p}=N$ yields the stated formula. For $N=1$, the empty product and the trivial group both have order $1$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA405 - Orders of Special and Projective Special Linear Groups|Exercise LA405]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]

## Notes

- **Source and proof status:** The formula, including the factor $1-p^{-2}$, was checked against [S2, Ch. XIII, Ex. 19, printed p. 547, PDF p. 562]. The proof is independently derived; the Chinese remainder theorem is the named external standard input.
