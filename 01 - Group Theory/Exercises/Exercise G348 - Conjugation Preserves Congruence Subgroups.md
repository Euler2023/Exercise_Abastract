---
title: "Exercise G348: Conjugation Preserves Congruence Subgroups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.5, printed p. 22, PDF p. 37"
source_refs:
  - "S7/ch-1/sec-2/ex-5"
created: 2026-10-24
---

# Exercise G348: Conjugation Preserves Congruence Subgroups

## Problem Statement

> [!question] Original Exercise 1.2.5
> If $\Gamma$ is a congruence subgroup of $SL_2(\mathbb Z)$ and $\gamma\in SL_2(\mathbb Z)$, show that $\gamma^{-1}\Gamma\gamma$ is again a congruence subgroup of $SL_2(\mathbb Z)$.

## Hints

> [!hint]- Hint 1
> Choose $N$ with $\Gamma(N)\subseteq\Gamma$.

> [!hint]- Hint 2
> The principal congruence subgroup is the kernel of a homomorphism, hence normal in $SL_2(\mathbb Z)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> Choose a positive integer $N$ such that $\Gamma(N)\subseteq\Gamma$. Reduction modulo $N$ is a group homomorphism
> $$
> SL_2(\mathbb Z)\longrightarrow SL_2(\mathbb Z/N\mathbb Z)
> $$
> with kernel $\Gamma(N)$. Every kernel is normal, so $\gamma^{-1}\Gamma(N)\gamma=\Gamma(N)$. Conjugating the chosen containment gives
> $$
> \Gamma(N)\subseteq\gamma^{-1}\Gamma\gamma\subseteq SL_2(\mathbb Z).
> $$
> The middle group is a subgroup, and containing $\Gamma(N)$ is exactly the definition of a congruence subgroup. This proves the assertion with the same admissible level $N$; it does not assert that a least level has been computed.
>
> For example, if $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, then $S^{-1}\Gamma_0(N)S$ is the subgroup whose top-right entry is divisible by $N$, which still contains $\Gamma(N)$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

## Notes

The statement is verified against the original PDF. The independent proof uses only normality of a kernel and conjugation of a subgroup containment. It does not require reduction surjectivity.
