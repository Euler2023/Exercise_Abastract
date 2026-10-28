---
title: "Exercise MF93: Negating Weight One Residue Class Series"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.8, Exercise 4.8.6, printed p. 142, PDF p. 156"
source_refs:
  - "S7/ch-4/sec-8/ex-6"
created: 2026-10-28
---

# Exercise MF93: Negating Weight One Residue Class Series

## Problem Statement

> [!question] Original Exercise 4.8.6
> Show that $G_1^{(N-c_v,d_v)}(\tau)=-G_1^{(c_v,d_v)}(\tau)$ when $c_v\ne0$, and show that $G_1^{(0,-d_v)}(\tau)=-G_1^{(0,d_v)}(\tau)$.

> [!warning] Source issue
> The first printed identity omits negation of the second coordinate. The second omits a nonzero constant arising from the specified continuation of $\zeta^{\bar d}(1)$. The genuinely odd modular family is $g_1$, rather than $G_1$ with these constants. Both printed statements are retained above and corrected explicitly below.

## Hints

> [!hint]- Hint 1
> Negating a torsion vector must negate both coordinates.

> [!hint]- Hint 2
> For $c=0$, inspect the $\pi i/N$ term in the continued zeta constant; use $g_1$ for the genuinely odd family.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The printed claims are not both valid under the section's definitions. The corrected identities are
> $$
> G_1^{(N-c,-d)}=-G_1^{(c,d)}\quad(0<c<N),\qquad
> G_1^{(0,-d)}=-G_1^{(0,d)}+2\pi i/N,
> $$
> and, for all nonzero marked torsion vectors,
> $$
> g_1^{-\bar v}=-g_1^{\bar v}.
> $$
> For the first corrected identity, in the signed divisor sum replace $m$ by $-m$. The congruence $n/m\equiv-c$ becomes $n/(-m)\equiv c$, the sign reverses, and $\mu_N^{-dm}$ becomes $\mu_N^{d(-m)}$. Thus each Fourier coefficient changes sign; the constant terms are zero because both first coordinates are nonzero.
>
> When $c=0$, the same substitution negates all nonconstant coefficients. But the constant is $\pi i/N+(\pi/N)\cot(\pi d/N)$; negation of $d$ negates the cotangent and preserves $\pi i/N$. Their sum is $2\pi i/N$, giving the second corrected identity.
>
> Finally, $Z$ is odd (pair opposite lattice terms in its normally convergent defining series) and the quasiperiod correction is linear in $(c,d)$, so the definition gives $g_1^{-\bar v}=-g_1^{\bar v}$ directly. Equivalently the correction in(4.34) cancels precisely the extra constants just computed.
>
> For a concrete counterexample to the first printed claim, take $N=3$, $(c,d)=(1,1)$. The coefficient of $q_N$ in $G_1^{(2,1)}$, divided by $C_1/N$, is $-\mu_3^{-1}$, while that in $-G_1^{(1,1)}$ is $-\mu_3$; they differ. For the second printed claim take $N=3,d=1$: the sum of the two constant terms is $2\pi i/3\ne0$. These counterexamples use the finite divisor coefficients and the explicit continued constant, not divergent weight-one lattice sums.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 142 / PDF 156. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
