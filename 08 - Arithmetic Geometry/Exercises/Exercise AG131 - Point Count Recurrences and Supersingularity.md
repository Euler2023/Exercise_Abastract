---
title: "Exercise AG131: Point Count Recurrences and Supersingularity"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.3, Exercise 8.3.5, printed p. 332, PDF p. 345"
source_refs:
  - "S7/ch-8/sec-3/ex-5"
created: 2026-10-28
---

# Exercise AG131: Point Count Recurrences and Supersingularity

## Problem Statement

> [!question] Original Exercise 8.3.5
> Use recurrence (8.21) to prove Proposition 8.3.3. (A hint for this exercise is at the end of the book.)

> **Context and notation.** Proposition 8.3.3: for a prime $p$ of good reduction, $\widetilde E$ is supersingular if and only if $a_p(E)\equiv0\pmod p$, and ordinary otherwise. Equation (8.21) is $t_e=a_p(E)t_{e-1}-pt_{e-2}$ with $t_0=2$, $t_1=a_p(E)$.

## Hints

> [!hint]- Hint 1
> Reduce the recurrence modulo $p$ and express every extension-field point count modulo $p$.

> [!hint]- Hint 2
> Every geometric torsion point is defined over a finite field extension. Use Cauchy’s theorem for the converse.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Let $a=a_p(E)$ and $t_e=p^e+1-\#\widetilde E(\mathbb F_{p^e})$. The section gives $t_0=2$, $t_1=a$, and $t_e=at_{e-1}-pt_{e-2}$. Reduction modulo $p$ yields $t_e\equiv a^e\pmod p$ for every $e\ge1$, by induction, hence
> $$
> \#\widetilde E(\mathbb F_{p^e})\equiv1-a^e\pmod p.
> $$
> If $a\equiv0\pmod p$, each of these finite groups has order prime to $p$. A nonzero geometric $p$-torsion point would have its finitely many coordinates in some finite extension $\mathbb F_{p^e}$ and would give a subgroup of order $p$ there, contradicting Lagrange's theorem. Thus $\widetilde E[p]=\{0\}$, which is the supersingular case.
>
> Conversely, if $a\not\equiv0\pmod p$, choose $e=p-1$ (for $p=2$ this is $e=1$). Fermat's theorem gives $a^e\equiv1$, so $p$ divides the finite group order. Cauchy's theorem produces a nonidentity point of order $p$. The torsion structure theorem in characteristic $p$ says that the alternatives are $\mathbb Z/p\mathbb Z$ and the trivial geometric group. Hence the reduction is ordinary. This proves both directions, including the small primes at which the reduction is good.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 332 / PDF p. 345. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
