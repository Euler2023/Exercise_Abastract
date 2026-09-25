---
title: "Exercise R295: Frobenius Improves DVR Congruences"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - discrete-valuation-rings
  - frobenius
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XII, Exercises, Exercise 15, printed p. 497, PDF p. 512"
created: 2026-09-25
---

# Exercise R295: Frobenius Improves DVR Congruences

## Problem Statement

> [!question] Lang, Chapter XII, Exercise 15
> Let $F$ be a complete field with respect to a discrete valuation, let $\mathfrak o$ be the valuation ring, $\pi$ a prime element, and assume that $\mathfrak o/(\pi)=k$. Prove that if $a,b\in\mathfrak o$ and $a\equiv b\pmod{\pi^r}$ with $r>0$, then $a^{p^n}\equiv b^{p^n}\pmod{\pi^{r+n}}$ for all integers $n\ge0$.

> [!warning] Source issue: the prime $p$ is not specified
> The printed statement uses $p$ in its conclusion but never defines it or assumes $\operatorname{char}k=p>0$. As printed, the assertion is false if $k$ has characteristic zero: in $F=\mathbb Q((\pi))$, take $p=2$, $a=1+\pi$, $b=1$, $r=1$, and $n=1$. Then $a^2-b^2=2\pi+\pi^2$ is not divisible by $\pi^2$. The solution below uses the necessary corrected hypothesis $\operatorname{char}k=p>0$.

## Hints

> [!hint]- Hint 1: First prove one step
> It suffices to show that $a\equiv b\pmod{\pi^s}$ with $s\ge1$ implies $a^p\equiv b^p\pmod{\pi^{s+1}}$.

> [!hint]- Hint 2: Use the residue characteristic
> If $\operatorname{char}k=p$, then $p\in\pi\mathfrak o$, so each middle binomial coefficient $\binom pj$ is divisible by $\pi$.

> [!hint]- Hint 3: Bound every binomial term
> Write $a=b+\pi^s c$ and compare the $\pi$ orders of the terms in $(b+\pi^s c)^p-b^p$.

## Solution

> [!success]- Complete derivation under the corrected hypothesis
> Assume $\operatorname{char}k=p>0$. Because the image of the integer $p$ in $k$ is zero, $p\in\pi\mathfrak o$; this includes the equal-characteristic case, where $p=0$ in $F$. Suppose $a-b=\pi^s c$ for some $s\ge1$ and $c\in\mathfrak o$. The binomial theorem gives
>
> $$
> a^p-b^p=\sum_{j=1}^{p-1}\binom pj b^{p-j}\pi^{sj}c^j+\pi^{sp}c^p.
> $$
>
> Since $p$ is prime, $p$ divides $\binom pj$ for $1\le j<p$. Each middle summand therefore lies in $\pi^{sj+1}\mathfrak o\subseteq\pi^{s+1}\mathfrak o$. The last summand lies in $\pi^{sp}\mathfrak o\subseteq\pi^{s+1}\mathfrak o$, because $(p-1)s\ge1$. Hence $a^p\equiv b^p\pmod{\pi^{s+1}}$.
>
> Apply this one-step implication successively to $a,b$, then $a^p,b^p$, and so on. The starting congruence has exponent $r$; after $n$ steps it has exponent $r+n$, while the powers have become $p^n$. The case $n=0$ is the original congruence. Completeness of $F$ is unnecessary for this finite congruence argument; it becomes useful in Exercise 16 when the improving congruences define a limit.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[08 - Arithmetic Geometry/Concepts/Local Fields|Local Fields]]

## Notes

- **Routing:** This is a calculation with powers of the maximal ideal in a discrete valuation ring, so Ring Theory supplies the primary toolkit.
- **Source and proof status:** [S2, Ch. XII, Exercise 15, printed p. 497, PDF p. 512]. The printed omission and counterexample are identified above. The corrected binomial proof is independently derived.
- **Exact hypothesis used:** A complete discrete valuation ring is sufficient but stronger than needed; any DVR with residue characteristic $p>0$ satisfies the displayed congruence.
