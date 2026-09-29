---
title: "Exercise R315: Iterated Leibniz Rule in Prime Characteristic"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, Exercise 14, printed p. 757, PDF p. 772"
created: 2026-09-29
---

# Exercise R315: Iterated Leibniz Rule in Prime Characteristic

## Problem Statement

> [!question] Lang XIX.14
> **(a)** For any derivation $D$ of a ring $A$ into itself, prove Leibniz's rule:
> $$
> D^n(xy)=\sum_{i=0}^n\binom ni D^i(x)D^{n-i}(y).
> $$
> **(b)** Suppose $A$ has characteristic $p$. Show that $D^p$ is a derivation.

## Hints

> [!hint]- Hint 1
> Differentiate the formula once and group adjacent terms.

> [!hint]- Hint 2
> For prime $p$, the interior binomial coefficients $\binom pi$ vanish in characteristic $p$.

## Solution

> [!success]- Independent derivation
> **(a)** For $n=0$ the formula is the identity $xy=xy$; for $n=1$ it is the derivation rule. Suppose it holds for $n$. Differentiating each summand gives
> $$
> \sum_{i=0}^n\binom ni\left(D^{i+1}(x)D^{n-i}(y)+D^i(x)D^{n+1-i}(y)\right).
> $$
> The coefficient at $D^j(x)D^{n+1-j}(y)$ is $\binom n{j-1}+\binom nj=\binom{n+1}j$, with the missing boundary terms interpreted as zero. This proves the induction. The order of the two factors never changes, so this calculation even works for a noncommutative ring.
>
> **(b)** As usual in “characteristic $p$,” $p$ is prime. The additive map $D^p$ satisfies
> $$
> D^p(xy)=D^p(x)y+xD^p(y),
> $$
> because $p$ divides $\binom pi$ for $0<i<p$. Thus it is a derivation. If $D$ is a derivation over a base ring, its iterates still vanish on that base, so $D^p$ is a derivation over it.

## Related Concepts

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations]]

## Notes

- **Source status:** [S2, Ch. XIX, Ex. 14, printed p. 757, PDF p. 772]. The original page image was checked; the solution above is an independent derivation.
- The primality of $p$ is essential to the binomial-coefficient argument.
