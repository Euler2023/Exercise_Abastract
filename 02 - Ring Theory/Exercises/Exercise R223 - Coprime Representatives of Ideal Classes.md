---
title: "Exercise R223: Coprime Representatives of Ideal Classes"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - dedekind-rings
  - ideal-class-groups
  - chinese-remainder-theorem
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. II, Rings, Exercise 19, printed p. 116, PDF p. 131"
created: 2026-08-28
---

# Exercise R223: Coprime Representatives of Ideal Classes

## Problem Statement

> [!question] Exercise 19
> Let $\mathfrak a,\mathfrak b$ be ideals of a Dedekind ring $\mathfrak o$. Show that there exists $c\in K$, where $K$ is the quotient field of $\mathfrak o$, such that $c\mathfrak a$ is an ideal relatively prime to $\mathfrak b$. In particular, every ideal class in $\operatorname{Pic}(\mathfrak o)$ contains representative ideals prime to a given ideal.
>
> For a continuation, see Exercise 7 of Chapter VII.

## Hints

> [!hint]- Hint 1
> If $\mathfrak p_1,\ldots,\mathfrak p_n$ are the distinct prime divisors of $\mathfrak b$, choose $c\in\mathfrak a^{-1}$ that avoids every $\mathfrak p_i\mathfrak a^{-1}$.

> [!hint]- Hint 2
> Apply the Chinese remainder theorem to the $\mathfrak o$-module $\mathfrak a^{-1}$.

## Solution

> [!success]- Solution
> If $\mathfrak b=\mathfrak o$, take $c=1$; then $\mathfrak a+\mathfrak b=\mathfrak o$. Assume henceforth that $\mathfrak b$ is proper.
>
> Let $\mathfrak p_1,\ldots,\mathfrak p_n$ be the distinct prime ideals appearing in the factorization of $\mathfrak b$. For each $i$,
>
> $$
> \mathfrak p_i\mathfrak a^{-1}
> \subsetneq\mathfrak a^{-1}.
> $$
>
> Indeed, equality would give $\mathfrak p_i=\mathfrak o$ after multiplication by $\mathfrak a$. Choose
>
> $$
> c_i\in\mathfrak a^{-1}
> \setminus\mathfrak p_i\mathfrak a^{-1}.
> $$
>
> Distinct $\mathfrak p_i$ are comaximal by II.18, and multiplying
>
> $$
> \mathfrak p_i+\mathfrak p_j=\mathfrak o
> $$
>
> by $\mathfrak a^{-1}$ gives
>
> $$
> \mathfrak p_i\mathfrak a^{-1}
> +\mathfrak p_j\mathfrak a^{-1}
> =\mathfrak a^{-1}.
> $$
>
> The module form of the Chinese remainder theorem therefore supplies $c\in\mathfrak a^{-1}$ satisfying
>
> $$
> c\equiv c_i
> \pmod{\mathfrak p_i\mathfrak a^{-1}}
> \qquad(1\le i\le n).
> $$
>
> In particular,
>
> $$
> c\notin\mathfrak p_i\mathfrak a^{-1}
> $$
>
> for every $i$. Since $c\in\mathfrak a^{-1}$, the product
>
> $$
> \mathfrak d=c\mathfrak a
> $$
>
> is an integral ideal. It is not contained in any $\mathfrak p_i$: if $\mathfrak d\subseteq\mathfrak p_i$, multiplication by $\mathfrak a^{-1}$ would give
>
> $$
> (c)=\mathfrak d\mathfrak a^{-1}
> \subseteq\mathfrak p_i\mathfrak a^{-1},
> $$
>
> contradicting the choice of $c$.
>
> If $\mathfrak d+\mathfrak b$ were proper, it would lie in a maximal ideal $\mathfrak p$. Then $\mathfrak b\subseteq\mathfrak p$, and prime factorization of $\mathfrak b$ would force $\mathfrak p=\mathfrak p_i$ for some $i$. But this would also give $\mathfrak d\subseteq\mathfrak p_i$, which we have excluded. Therefore
>
> $$
> c\mathfrak a+\mathfrak b=\mathfrak o,
> $$
>
> so $c\mathfrak a$ is relatively prime to $\mathfrak b$.
>
> Finally, multiplication by the principal fractional ideal $(c)$ does not change the class in $\operatorname{Pic}(\mathfrak o)$. Hence every ideal class contains an integral representative prime to the prescribed ideal $\mathfrak b$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Module CRT:** The ordinary CRT idempotents act on the fractional ideal $\mathfrak a^{-1}$, giving the stated simultaneous congruences without treating it as a ring.
- **Source continuation:** Lang points from this exercise to Chapter VII, Exercise 7 for a continuation of the Dedekind-ring factorization theory.
- **Source status:** The statement, Picard-group conclusion, and continuation pointer were visually checked at [S2, Ch. II, Ex. 19, printed p. 116, PDF p. 131]. The proof is independent and uses II.14 and II.18.
