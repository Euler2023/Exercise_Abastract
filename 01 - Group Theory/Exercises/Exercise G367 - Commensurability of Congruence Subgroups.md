---
title: "Exercise G367: Commensurability of Congruence Subgroups"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.1, Exercise 5.1.2, printed p. 167, PDF p. 181"
source_refs:
  - "S7/ch-5/sec-1/ex-2"
created: 2026-10-28
---

# Exercise G367: Commensurability of Congruence Subgroups

## Problem Statement

> [!question] Original Exercise 5.1.2
> Show that for congruence subgroups $G_1$ and $G_2$ of $SL_2(\mathbb Z)$, the indices $[G_1:G_1\cap G_2]$ and $[G_2:G_1\cap G_2]$ are finite. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Choose principal congruence subgroups contained in both groups.

> [!hint]- Hint 2
> Use the least common multiple of their levels.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Choose positive integers $N_i$ with $\Gamma(N_i)\subseteq G_i$, and put $L=\operatorname{lcm}(N_1,N_2)$. Then
> $$
> \Gamma(L)\subseteq G_1\cap G_2\subseteq G_i\subseteq SL_2(\mathbb Z).
> $$
> Reduction modulo $L$ is a homomorphism into a finite matrix group, with kernel $\Gamma(L)$. Thus $[SL_2(\mathbb Z):\Gamma(L)]<\infty$.
>
> For either $i$, sending a left coset $\Gamma(L)g$ to $(G_1\cap G_2)g$ is well defined and surjective. Therefore
> $$
> [G_i:G_1\cap G_2]\leq[G_i:\Gamma(L)]
> \leq[SL_2(\mathbb Z):\Gamma(L)]<\infty.
> $$
> This proves both indices finite without requiring the intersection to be normal.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.1.2, printed p. 167 / PDF p. 181]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Hint provenance:** Appendix A, printed p. 421 / PDF p. 432, gives the common-level least-common-multiple idea; the proof above expands it.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
