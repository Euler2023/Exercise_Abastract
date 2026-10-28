---
title: "Exercise LA637: The Auxiliary Coefficient Form Remains an Eigenvector"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.8, Exercise 5.8.2, printed p. 200, PDF p. 214"
source_refs:
  - "S7/ch-5/sec-8/ex-2"
created: 2026-10-28
---

# Exercise LA637: The Auxiliary Coefficient Form Remains an Eigenvector

## Problem Statement

> [!question] Original Exercise 5.8.2
> Show that the function $g_m$ in the section is an eigenfunction for the Hecke operators $T_n$ and $\langle n\rangle$ when $(n,N)=1$.
>
> The setup is a normalized $f\in S_k(\Gamma_1(N))^{\mathrm{new}}$ which is an eigenform away from $N$, with $T_nf=c_nf$ and $\langle n\rangle f=d_nf$ for $(n,N)=1$. The function is $g_m=T_mf-a_m(f)f$, for any positive integer $m$.

## Hints

> [!hint]- Hint 1
> The Hecke operators commute with one another and with the diamond operators.

> [!hint]- Hint 2
> Apply an operator to both terms of $g_m$ and factor out its eigenvalue on $f$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The Hecke algebra commutativity relations give $T_nT_m=T_mT_n$ and $\langle n\rangle T_m=T_m\langle n\rangle$. Hence, for $(n,N)=1$,
> $$
> T_ng_m=T_mT_nf-a_m(f)T_nf=c_n(T_mf-a_m(f)f)=c_ng_m,
> $$
> and similarly
> $$
> \langle n\rangle g_m=T_m\langle n\rangle f-a_m(f)\langle n\rangle f=d_ng_m.
> $$
> Also $g_m$ lies in the newspace because that space is stable under $T_m$ (Proposition 5.6.2). These equations are the requested eigenfunction relations.
>
> There is a useful logical qualification: if $g_m=0$, it is not an eigenvector under the definition requiring nonzero vectors. The proof only needs the displayed equations. They give $a_n(g_m)=c_na_1(g_m)$ for $(n,N)=1$ by the first-coefficient formula. Since $a_1(g_m)=a_m(f)-a_m(f)a_1(f)=0$, the Main Lemma places $g_m$ in the oldspace. Its membership in the newspace then forces $g_m=0$. Thus the source ultimately proves that this candidate eigenfunction is identically zero; it never needs a nonzero eigenvector claim.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.8.2, printed p. 200 / PDF p. 214]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The definition and use of $g_m$ are on printed p.197/PDF p.211. “Eigenfunction” here is understood as satisfying the eigenvalue equations, allowing the zero function during this argument.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
