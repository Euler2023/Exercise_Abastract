---
title: "Exercise MF59: Cusp Forms under Divisibility of Levels"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.6, Exercise 5.6.1, printed p. 190, PDF p. 204"
source_refs:
  - "S7/ch-5/sec-6/ex-1"
created: 2026-10-28
---

# Exercise MF59: Cusp Forms under Divisibility of Levels

## Problem Statement

> [!question] Original Exercise 5.6.1
> Show that if $M\mid N$ then $S_k(\Gamma_1(M))\subset S_k(\Gamma_1(N))$.

## Hints

> [!hint]- Hint 1
> Compare the congruence conditions defining the two groups.

> [!hint]- Hint 2
> At a cusp, a finite-index subgroup has a cusp width which is a positive integer multiple of the original width.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $\Gamma_1(L)=\{\left(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right)\in\mathrm{SL}_2(\mathbb Z):a,d\equiv1,\ c\equiv0\pmod L\}$. Since $M\mid N$, $\Gamma_1(N)\subset\Gamma_1(M)$, so every weight-$k$ transformation law for the larger group also holds for the smaller one.
>
> It remains to check cusps, rather than infer cuspidality only from invariance. Fix a rational cusp $r$ and $\sigma\in\mathrm{SL}_2(\mathbb Z)$ with $\sigma\infty=r$. The cusp stabilizer for $\Gamma_1(N)$ is a subgroup of that for $\Gamma_1(M)$ of finite index. On the effective action, its width is therefore $h_N=e h_M$ for an integer $e\ge1$. An expansion of $f[\sigma]_k$ in the parameter $q_M=e^{2\pi i\tau/h_M}$ with strictly positive exponents becomes an expansion in $q_N=e^{2\pi i\tau/h_N}$ by $q_M=q_N^e$. It is again holomorphic and has zero constant term. If the lifted stabilizer imposes a sign, its possible fractional shift is unchanged by taking the indicated power; equivalently use $f[\sigma]_k(\tau)\to0$ as $\operatorname{Im}\tau\to\infty$. Thus $f$ vanishes at every cusp for the smaller group and belongs to $S_k(\Gamma_1(N))$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.6.1, printed p. 190 / PDF p. 204]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
