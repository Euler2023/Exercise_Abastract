---
title: "Exercise R438: Localization at an Eigencharacter and Nakayamas Lemma"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 6, Section 6.5, Exercise 6.5.5, printed pp. 243–244, PDF pp. 257–258"
source_refs:
  - "S7/ch-6/sec-5/ex-5"
created: 2026-10-28
---

# Exercise R438: Localization at an Eigencharacter and Nakayamas Lemma

## Problem Statement

> [!question] Original Exercise 6.5.5
> Let $J_f$, $\mathbb T_{\mathbb C}$, and $S_2$ be as in the proof of Theorem 6.5.4. Show that $J_f$ is a prime ideal. Define the local ring of $\mathbb T_{\mathbb C}$ at $J_f$ as a set of equivalence classes of formal elements
> $$
> A=\{T/U:T\in\mathbb T_{\mathbb C},\ U\in\mathbb T_{\mathbb C}-J_f\}/\sim,
> $$
> where $T/U\sim T'/U'$ if $V(U'T-UT')=0$ for some nonzero $V\in\mathbb T_{\mathbb C}-J_f$. Show this is an equivalence relation and that the usual fraction operations make $A$ a ring:
> $$
> T/U+T'/U'=(U'T+UT')/(UU'),\qquad (T/U)(T'/U')=TT'/(UU').
> $$
> Show $J=J_fA$ is the unique maximal ideal. Similarly define
> $$
> M=\{g/U:g\in S_2,\ U\in\mathbb T_{\mathbb C}-J_f\}/\sim,
> $$
> where $g/U\sim g'/U'$ if $V(U'g-Ug')=0$ for some nonzero $V\in\mathbb T_{\mathbb C}-J_f$. Show this is an equivalence relation, giving an $A$-module under
> $$
> g/U+g'/U'=(U'g+Ug')/(UU'),\qquad (T/U)(g/U')=Tg/(UU').
> $$
> Show $M\ne\{0\}$, so by Nakayama's Lemma $JM\ne M$. Show that therefore $J_fS_2\ne S_2$.

## Hints

> [!hint]- Hint 1
> Use the eigencharacter $\lambda_f:\mathbb T_{\mathbb C}\to\mathbb C$. Its complement of the kernel is multiplicatively closed.

> [!hint]- Hint 2
> If the localized module vanished, multiply the finitely many denominators killing a complex basis and use the faithful action on $S_2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $B=\mathbb T_{\mathbb C}$, $\mathfrak p=J_f=\ker\lambda_f$ and $S=B\setminus\mathfrak p$. The character fixes complex scalars, so $B/\mathfrak p=\mathbb C$. Thus $\mathfrak p$ is maximal and prime, $0\notin S$, $1\in S$, and $S$ is multiplicatively closed.
>
> For either the ring numerator module $B$ or the module $S_2$, reflexivity has witness $1$ and symmetry has the same witness with a sign. To prove transitivity, suppose $v(u'x-ux')=0$ and $w(u''x'-u'x'')=0$. Multiplying and adding gives
> $$
> vw u'(u''x-ux'')=0.
> $$
> The witness $vwu'$ lies in $S$, proving transitivity. Replacing one representative in a sum or scalar product changes its cross-multiplied numerator by a multiple of the old cross-difference. Its old witness therefore still kills that difference; replacing both representatives uses the product of the witnesses. Thus all printed operations are well-defined. Clearing a common denominator reduces associativity, distributivity and module axioms to those in $B$ and $S_2$. Identities are $0/1$, $1/1$ and inverse $-x/u$.
>
> The map $A\to\mathbb C$, $t/u\mapsto\lambda_f(t)/\lambda_f(u)$, is well-defined and onto. Its kernel consists exactly of fractions whose numerator belongs to $\mathfrak p$, namely $J=\mathfrak p A$. Hence $J$ is proper. If $t/u\notin J$, then $t\in S$ and $u/t$ is its inverse. Every proper ideal therefore lies in $J$, proving uniqueness of the maximal ideal.
>
> Choose a finite complex basis $g_1,\ldots,g_r$ of $S_2$. These $g_i/1$ generate $M$ over $A$, since complex scalars belong to $B$. If $M=0$, for each $i$ there is $s_i\in S$ with $s_i g_i=0$. Then $s=\prod_i s_i\in S$ kills every basis vector, hence all $S_2$. Since $B$ is defined as an algebra of operators on $S_2$, its action is faithful, giving $s=0$, a contradiction. The case $r=0$ cannot arise here because the normalized eigenform $f$ is nonzero.
>
> For completeness, the local form of Nakayama needed here has a short proof. If $JM=M$ for a nonzero finitely generated module, take a generating set of smallest positive size $m_1,\ldots,m_r$. Write $m_r=\sum a_i m_i$ with all $a_i\in J$. The element $1-a_r$ is outside $J$, hence a unit, expressing $m_r$ in terms of the previous generators, a contradiction. Thus $JM\ne M$. Finally $J_fS_2=S_2$ would localize to $JM=M$ (the fraction operations give $S^{-1}(J_fS_2)=JM$), which has just been excluded.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Proof inputs:** Only finite dimensionality of $S_2$ and the defining faithful operator realization of its Hecke algebra are used. The needed version of Nakayama is proved in the solution.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
