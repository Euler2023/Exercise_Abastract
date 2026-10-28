---
title: "Exercise R433: Totient Counts for Primitive Residue Columns"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.8, Exercise 3.8.2, printed p. 106, PDF p. 120"
source_refs:
  - "S7/ch-3/sec-8/ex-2"
created: 2026-10-28
---

# Exercise R433: Totient Counts for Primitive Residue Columns

## Problem Statement

> [!question] Original Exercise 3.8.2
> (a) Let $d$ be a divisor of $N$. Show that the number of values $a$ modulo $N$ such that $\gcd(a,d)=1$ is $(N/d)\varphi(d)$.
>
> (b) Show that $\sum_{d\mid N}(N/d)\varphi(d)\varphi(N/d)=N^2\prod_{p\mid N}(1-1/p^2)$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Each residue class modulo $d$ has exactly $N/d$ lifts modulo $N$.

> [!hint]- Hint 2
> Count primitive pairs modulo $N$ in two ways.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Reduction $\mathbb Z/N\mathbb Z\to\mathbb Z/d\mathbb Z$ has fibers of size $N/d$. Exactly $\varphi(d)$ target classes are units; their fibers are precisely the required classes.
>
> **(b)** Count pairs $(a,c)$ modulo $N$ with $\gcd(a,c,N)=1$. For a fixed $d=\gcd(c,N)$, there are $\varphi(N/d)$ choices of $c$: write $c=dt$ with $t$ a unit modulo $N/d$ (also valid for $d=N$, with $\varphi(1)=1$). Part(a) gives $(N/d)\varphi(d)$ choices of $a$. Summation yields the left side. Alternatively the Chinese remainder theorem reduces the count to $N=p^e$. There are $p^{2e}$ pairs in total and $p^{2e-2}$ with both entries divisible by $p$. Thus the local count is $p^{2e}(1-p^{-2})$. Multiplying over the prime powers dividing $N$ gives the right side.

## Related Concepts

- [[02 - Ring Theory/Concepts/Principal Ideal Domains|Principal Ideal Domains]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 106 / PDF 120. The solution above is independently derived.
- **Routing:** The principal toolkit is ring-theory; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
