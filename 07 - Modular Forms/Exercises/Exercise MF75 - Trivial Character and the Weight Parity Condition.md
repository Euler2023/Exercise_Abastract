---
title: "Exercise MF75: Trivial Character and the Weight Parity Condition"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.3, Exercise 4.3.3, printed p. 120, PDF p. 134"
source_refs:
  - "S7/ch-4/sec-3/ex-3"
created: 2026-10-28
---

# Exercise MF75: Trivial Character and the Weight Parity Condition

## Problem Statement

> [!question] Original Exercise 4.3.3
> (a) Show that $M_k(N,1)=M_k(\Gamma_0(N))$.
>
> (b) Show that $M_k(N,\chi)=\{0\}$ unless $\chi(-1)=(-1)^k$.

## Hints

> [!hint]- Hint 1
> Expand the definition $M_k(N,\chi)=\{f\in M_k(\Gamma_1(N)):f[\gamma]_k=\chi(d_\gamma)f\ \forall\gamma\in\Gamma_0(N)\}$.

> [!hint]- Hint 2
> For (b), apply the defining relation to $-I$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** For the trivial character, the defining condition is $f[\gamma]_k=f$ for every $\gamma\in\Gamma_0(N)$. Along with holomorphy on $\mathcal H$ and at cusps inherited from $M_k(\Gamma_1(N))$, this is the definition of $M_k(\Gamma_0(N))$. Conversely any form for $\Gamma_0(N)$ is a form for the subgroup $\Gamma_1(N)$, and satisfies that same invariance, so both inclusions hold. Holomorphy when passing between these finite-index groups is preserved by the positive-power relation between their cusp parameters.
>
> **(b).** The matrix $-I$ lies in $\Gamma_0(N)$, has lower-right entry $-1$, and acts by $f[-I]_k=(-1)^{-k}f=(-1)^kf$. The eigenspace condition also gives $f[-I]_k=\chi(-1)f$. Thus $(( -1)^k-\chi(-1))f=0$. If the two scalars differ, every value of $f$ is zero. Equivalently a nonzero form requires precisely the stated parity condition. This is a necessary condition, not an assertion that every parity-compatible space is nonzero.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.3.3, printed p. 120 / PDF p. 134]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked definition:** The eigenspace $M_k(N,\chi)$ is defined on printed p.119/PDF p.133. The argument uses the extended trivial character only at lower-right entries of $\Gamma_0(N)$, which are units modulo $N$.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
