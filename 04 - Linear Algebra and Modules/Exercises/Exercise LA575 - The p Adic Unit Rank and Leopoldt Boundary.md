---
title: 'Exercise LA575: The p Adic Unit Rank and Leopoldt Boundary'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 4, printed p. 394, PDF p. 413
source_refs:
- S4/ch-VI/sec-5/ex-4
created: '2026-10-23'
---

# Exercise LA575: The p Adic Unit Rank and Leopoldt Boundary

## Problem Statement

> [!question] Neukirch VI.5.4
> The group $\bar E(p):=\bar E\cap\prod_{\mathfrak p\mid p}U_{\mathfrak p}^{(1)}$ is a $\mathbb Z_p$-module of rank $r_p(E):=\operatorname{rank}_{\mathbb Z_p}(\bar E(p))=[K:\mathbb Q]-\operatorname{rank}_{\mathbb Z_p}G(M_p|K)$. $r_p(E)$ is called the **p-adic unit rank**.
> **Following unnumbered source Problem (context, not an additional numbered exercise):** For the $p$-adic unit rank, one has the famous **Leopoldt conjecture**:
> $$
> r_p(E)=r+s-1,
> $$
> where $r$, resp. $s$, is the number of all real, resp. complex, places; in other words,
> $$
> \operatorname{rank}_{\mathbb Z_p}G(M_p|K)=s+1.
> $$
> The Leopoldt conjecture was proved for abelian number fields $K|\mathbb Q$ by the American mathematician Armand Brumer [22]. The general case is still open to date.

## Hints

> [!hint]- Hint
> The principal unit product has rank $\sum_{v\mid p}[K_v:\mathbb Q_p]$. Take ranks in the preceding exact sequence, keeping the unnumbered conjecture outside the proof claim.

> [!hint]- Stronger hint
> Apply the p-adic logarithm on a sufficiently deep finite-index principal-unit subgroup, then tensor the preceding exact sequence with Q_p.

## Solution

> [!success]- Independent derivation
> For each $v\mid p$, the $p$-adic logarithm identifies a sufficiently deep principal unit group with the additive group of $\mathfrak p_v^n$, a free $\mathbb Z_p$-module of rank $[K_v:\mathbb Q_p]$. Passing to a subgroup of finite index and removing finite torsion do not change rank, so
> $$
> \operatorname{rank}_{\mathbb Z_p}\prod_{v\mid p}U_v^{(1)}
> =\sum_{v\mid p}[K_v:\mathbb Q_p]=[K:\mathbb Q].
> $$
> The closed subgroup $\bar E(p)$ is a finitely generated $\mathbb Z_p$-module; $\mathrm{Cl}_K(p)$ and the signs at infinite places are finite. The exact sequence in the preceding exercise, including the necessary correction to the sign of $p=2$, remains exact after tensoring with $\mathbb Q_p$. Thus
> $$
> \operatorname{rank}G(M_p/K)
> =[K:\mathbb Q]-\operatorname{rank}\bar E(p).
> $$
> This proves the rank identity in the numbered exercise.
> **Proof boundary.** The subsequent Leopoldt equality is an additional conjecture and does not follow from the rank identity above. Substitution of $[K:\mathbb Q]=r_1+2r_2$ proves that the two formulations of the conjecture are equivalent. This exercise does not prove the general Leopoldt conjecture.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Modules and Exact Sequences]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

The statement was checked against the original page image [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §5, Exercise 4, printed p.394, PDF p.413]. The solution is an independent derivation.

- **Historical source context:** The unnumbered Leopoldt Problem is retained as a statement from the 1999 source. The exercise solution proves the displayed rank identity; it does not prove the conjecture or make a claim about its present research status.
