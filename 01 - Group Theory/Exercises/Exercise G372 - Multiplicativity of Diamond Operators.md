---
title: "Exercise G372: Multiplicativity of Diamond Operators"
topic: group-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - group-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.2, Exercise 5.2.7, printed p. 178, PDF p. 192"
source_refs:
  - "S7/ch-5/sec-2/ex-7"
created: 2026-10-28
---

# Exercise G372: Multiplicativity of Diamond Operators

## Problem Statement

> [!question] Original Exercise 5.2.7
> Verify part (b) of Proposition 5.2.4.
>
> **Referenced Proposition 5.2.4(b), printed p. 173 / PDF p. 187.** For $d,e\in(\mathbb Z/N\mathbb Z)^*$,
> $$
> \langle d\rangle\langle e\rangle=\langle e\rangle\langle d\rangle=\langle de\rangle.
> $$
> The operator $\langle d\rangle$ acts on $M_k(\Gamma_1(N))$ by $f\mapsto f[A_d]_k$ for any $A_d\in\Gamma_0(N)$ with bottom right entry congruent to $d$ modulo $N$.

## Hints

> [!hint]- Hint 1
> Use the quotient homomorphism $\Gamma_0(N)\to(\mathbb Z/N\mathbb Z)^*$.

> [!hint]- Hint 2
> The lower right entry of a product equals the product of the lower right entries modulo $N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $A_d,A_e\in\Gamma_0(N)$ represent the two operators. The bottom left entries are divisible by $N$, so the lower right entry of either $A_dA_e$ or $A_eA_d$ is congruent to $de$ modulo $N$. Both products therefore represent $\langle de\rangle$.
>
> The slash composition law gives $\langle d\rangle(\langle e\rangle f)=f[A_eA_d]_k=\langle de\rangle f$ and, in the reverse order, $f[A_dA_e]_k=\langle de\rangle f$. These equalities hold for every $f\in M_k(\Gamma_1(N))$, proving the operator identity.
>
> For completeness, the representative choice is harmless: matrices in $\Gamma_0(N)$ with the same bottom right residue have the same image under the homomorphism $\Gamma_0(N)\to(\mathbb Z/N\mathbb Z)^*$, whose kernel is $\Gamma_1(N)$. They differ on the left by an element fixing $f$ under the slash action. Thus the calculation is an identity of the well-defined quotient action, not a claim that the representative matrices themselves commute.

## Related Concepts

- [[01 - Group Theory/Concepts/Group Actions]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.2.7, printed p. 178 / PDF p. 192]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** Proposition 5.2.4(b) was checked on printed p. 173 / PDF p. 187; the diamond-operator definition was checked on printed pp. 168–169 / PDF pp. 182–183.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
