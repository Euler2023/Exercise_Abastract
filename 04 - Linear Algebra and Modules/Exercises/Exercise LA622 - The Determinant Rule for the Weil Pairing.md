---
title: "Exercise LA622: The Determinant Rule for the Weil Pairing"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.4, Exercise 7.4.2, printed p. 282, PDF p. 295"
source_refs:
  - "S7/ch-7/sec-4/ex-2"
created: 2026-10-28
---

# Exercise LA622: The Determinant Rule for the Weil Pairing

## Problem Statement

> [!question] Original Exercise 7.4.2
> Prove Corollary 7.4.2.

> **Context and notation.** Corollary 7.4.2, printed p. 282 / PDF p. 295, states that if $P',Q'\in E[N]$ satisfy
> $$
> \binom{P'}{Q'}=\gamma\binom P Q,\qquad \gamma\in M_2(\mathbb Z/N\mathbb Z),
> $$
> then $e_N(P',Q')=e_N(P,Q)^{\det\gamma}$. In particular an ordered basis pairs to a primitive $N$th root of unity. The source-proved Weil pairing is bilinear, alternating and nondegenerate.

## Hints

> [!hint]- Hint 1
> Expand the pairing in the two coordinates and use $e(Q,P)=e(P,Q)^{-1}$.

> [!hint]- Hint 2
> If $e(P,Q)$ had smaller order $m$, pair $mP$ against every basis combination.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Write $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, so $P'=aP+bQ$ and $Q'=cP+dQ$. Bilinearity and alternation give
> $$
> \begin{aligned}
> e_N(P',Q')
> &=e_N(P,P)^{ac}e_N(P,Q)^{ad}e_N(Q,P)^{bc}e_N(Q,Q)^{bd}\\
> &=e_N(P,Q)^{ad-bc}
> =e_N(P,Q)^{\det\gamma}.
> \end{aligned}
> $$
> Skew symmetry follows from alternation by applying it to $P+Q$. Exponents are well defined modulo $N$ because every pairing value is an $N$th root of unity.
>
> Suppose now that $(P,Q)$ is an ordered basis and let $\zeta=e_N(P,Q)$ have order $m\mid N$. For any $aP+bQ$,
> $$
> e_N([m]P,aP+bQ)=\zeta^{mb}=1.
> $$
> Nondegeneracy of the Weil pairing forces $[m]P=0_E$. Since $P$ has exact order $N$, we have $N\mid m$. Together with $m\mid N$, this gives $m=N$, so $\zeta$ is primitive. This argument works over the ring $\mathbb Z/N\mathbb Z$ and does not assume it is a field.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Perfect Pairings over Finite Local Rings|Perfect Pairings over Finite Local Rings]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 282 / PDF p. 295. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
