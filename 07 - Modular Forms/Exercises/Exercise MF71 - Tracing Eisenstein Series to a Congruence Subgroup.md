---
title: "Exercise MF71: Tracing Eisenstein Series to a Congruence Subgroup"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.2, Exercise 4.2.2, printed p. 115, PDF p. 129"
source_refs:
  - "S7/ch-4/sec-2/ex-2"
created: 2026-10-28
---

# Exercise MF71: Tracing Eisenstein Series to a Congruence Subgroup

## Problem Statement

> [!question] Original Exercise 4.2.2
> Let $N$, $\overline v$, and $k$ be as in the section. Let $\Gamma$ be a congruence subgroup of $\mathrm{SL}_2(\mathbb Z)$ of level $N$, so that $\Gamma(N)\subset\Gamma\subset\mathrm{SL}_2(\mathbb Z)$. Define
> $$
> E_{k,\Gamma}^{\overline v}=\sum_{\gamma_j\in\Gamma(N)\backslash\Gamma}E_k^{\overline v}[\gamma_j]_k,
> $$
> the sum taken over a set of coset representatives. Show that $E_{k,\Gamma}^{\overline v}$ is well defined and lies in $M_k(\Gamma)$.

## Hints

> [!hint]- Hint 1
> Changing a left-coset representative multiplies it on the left by a matrix fixing $E_k^{\overline v}$.

> [!hint]- Hint 2
> Right multiplication permutes the finite cosets. Check holomorphy at every cusp after slashing by an arbitrary integral modular matrix.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Set $F=E_k^{\overline v}\in M_k(\Gamma(N))$, as established in Corollary 4.2.2 [printed p.112/PDF p.126]. The quotient has finite size. If $\gamma_j'=\eta_j\gamma_j$ with $\eta_j\in\Gamma(N)$, then $F[\gamma_j']_k=(F[\eta_j]_k)[\gamma_j]_k=F[\gamma_j]_k$. Reordering the finite sum changes nothing, so the definition is independent of representatives.
>
> For any $\gamma\in\Gamma$, the right translates $\Gamma(N)\gamma_j\gamma$ permute the left cosets. Thus the slash composition law gives
> $$
> E_{k,\Gamma}^{\overline v}[\gamma]_k=\sum_jF[\gamma_j\gamma]_k=\sum_jF[\gamma_j]_k=E_{k,\Gamma}^{\overline v}.
> $$
> Every summand is holomorphic on $\mathcal H$. To check a cusp, choose $\sigma\in\mathrm{SL}_2(\mathbb Z)$ taking $\infty$ to that cusp. Then $(F[\gamma_j]_k)[\sigma]_k=F[\gamma_j\sigma]_k$ is holomorphic at infinity, because $F$ is holomorphic at every rational cusp. A finite sum of such expansions is holomorphic there as well. Hence the sum is holomorphic at every cusp and satisfies all conditions for $M_k(\Gamma)$. It may be zero, for example through odd-weight sign cancellation if $-I\in\Gamma$; the assertion does not require nonvanishing.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.2.2, printed p. 115 / PDF p. 129]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
