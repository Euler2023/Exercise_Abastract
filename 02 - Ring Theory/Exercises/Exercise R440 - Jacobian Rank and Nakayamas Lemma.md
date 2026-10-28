---
title: "Exercise R440: Jacobian Rank and Nakayamas Lemma"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.2, Exercise 7.2.4, printed p. 270, PDF p. 283"
source_refs:
  - "S7/ch-7/sec-2/ex-4"
created: 2026-10-28
---

# Exercise R440: Jacobian Rank and Nakayamas Lemma

## Problem Statement

> [!question] Original Exercise 7.2.4
> Let $C$ be an affine algebraic curve as in Definition 7.2.1. Supply details as necessary in the following argument that $\operatorname{rank}[D_j\varphi_i(P)]=n$ for some $P\in C$ is impossible: If the rank is $n$ then the method of proving Lemma 7.2.2 shows that $m_P=m_P^2$ and so $M_P=M_P^2$. By Nakayama's Lemma $M_P=0$ and so $m_P=0$. This forces $\bar k[C]=\bar k$ and then $\bar k(C)=\bar k$, contradiction.

## Hints

> [!hint]- Hint 1
> The tangent/cotangent quotient calculation works even before imposing the nonsingularity rank.

> [!hint]- Hint 2
> Check finite generation before applying Nakayama, and use the domain hypothesis when passing back from the localization.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $A=\bar k[C]$ be the integral coordinate domain and $m=m_P$. The Taylor-term argument identifies $m/m^2$ with the space of coordinate linear forms modulo the Jacobian row space; it does not require nonsingularity for this identification. Rank $n$ makes that row space all of $\bar k^n$, so $m/m^2=0$, or $m=m^2$. Localizing gives $M=mA_m=M^2$.
>
> The ring $A$ is Noetherian by Hilbert's Basis Theorem and passage to quotients; localization preserves this property. In particular $M$ is a finitely generated $A_m$-module. The local version of **Nakayama's Lemma** says that a finitely generated module $V$ over a local ring with maximal ideal $M$ satisfying $MV=V$ is zero. Applied to $V=M$, it gives $M=0$.
>
> The natural map $A\to A_m$ is injective because $A$ is a domain and the multiplicative set excludes zero. Therefore $mA_m=0$ implies $m=0$. Evaluation at $P$ now gives
> $$
> A=A/m\simeq\bar k.
> $$
> Consequently its fraction field is $\bar k$. Definition 7.2.1, however, requires that fraction field to be a finite extension of $\bar k(t)$ for a transcendental $t$, hence to have transcendence degree $1$. The field $\bar k$ has transcendence degree $0$ over itself, a contradiction.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 270 / PDF p. 283. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
