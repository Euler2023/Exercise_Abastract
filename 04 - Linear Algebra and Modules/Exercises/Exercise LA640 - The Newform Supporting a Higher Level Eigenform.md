---
title: "Exercise LA640: The Newform Supporting a Higher Level Eigenform"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.8, Exercise 5.8.6, printed p. 200, PDF p. 214"
source_refs:
  - "S7/ch-5/sec-8/ex-6"
created: 2026-10-28
---

# Exercise LA640: The Newform Supporting a Higher Level Eigenform

## Problem Statement

> [!question] Original Exercise 5.8.6
> (a) Prove Proposition 5.8.4 by supplying details to this argument: Suppose that for each newform $f_i$ of level dividing $N$ there exists a prime $p_i\nmid N/M_i$ such that $a_{p_i}(f_i)\ne a_{p_i}(g)$. Write $g$ in terms of the basis provided by Theorem 5.8.3,
> $$
> g=\sum_i\sum_{n:\,nM_i\mid N}c_{i,n}f_{i,n},\qquad f_{i,n}(\tau)=f_i(n\tau),
> $$
> and then apply the level $N$ operator $\prod_i(T_{p_i}-a_{p_i}(f_i))$ to obtain a contradiction. (A hint for this exercise is at the end of the book.)
>
> (b) According to Strong Multiplicity One, the newform $f$ for which the equality in the proposition holds is unique. Deduce that $g$ is in the span of $\{f(n\tau):nM\mid N\}$ where $M$ is the level of $f$.
>
> Proposition 5.8.4: for a normalized cusp eigenform $g$ of level $N$ and character $\chi$, there is a newform $f$ of level $M\mid N$ such that $a_p(f)=a_p(g)$ for every prime $p\nmid N/M$; its character $\chi_M$ lifts to $\chi$ modulo $N$.

## Hints

> [!hint]- Hint 1
> For $p\nmid N/M_i$, $p$ divides no allowed degeneracy index $n$. Thus all $f_{i,n}$ have $T_p$ eigenvalue $a_p(f_i)$.

> [!hint]- Hint 2
> Use the direct sum of the blocks attached to distinct newforms. At every prime outside $N$, each nonzero block component must have the eigenvalue of $g$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **Inputs.** We use the newform degeneracy basis of Theorem 5.8.3 [S7, printed p.198/PDF p.212]. Its linear independence uses the imported Strong Multiplicity One theorem: two normalized cuspidal newforms whose prime eigenvalues agree outside a finite set are equal, including their primitive level and character. Neither that deep theorem nor the resulting independence is claimed proved here.
>
> **(a).** First restrict to blocks whose characters lift to $\chi$. This is permitted because the diamond operators are commuting finite-order operators and their simultaneous character spaces form a direct sum. In the basis expansion, comparison of diamond eigenvalues forces every coefficient in any other character space to be zero.
>
> If $p\nmid N/M_i$, then $p\nmid n$ for every $n\mid N/M_i$. The prime Fourier coefficient formula, with the same character value at $p$ for levels $M_i$ and $N$, gives
> $$
> T_{p,N}f_{i,n}=a_p(f_i)f_{i,n}.
> $$
> To see the character clause even if $p\mid N$, the condition implies $v_p(M_i)=v_p(N)>0$, so both character values are zero. If $p\nmid N$, both are the corresponding unit value. The index-divisibility check is the same as in Exercise 5.8.5(b).
>
> Assume contrary to the proposition that a prime $p_i$ as in the question exists for each of the finitely many newform blocks in the basis. The operators commute, so
> $$
> A=\prod_i(T_{p_i,N}-a_{p_i}(f_i)I)
> $$
> annihilates each block: its $i$th factor annihilates every $f_{i,n}$. Hence $Ag=0$. On the other hand $g$ is a normalized simultaneous eigenform, so
> $$
> Ag=\prod_i(a_{p_i}(g)-a_{p_i}(f_i))\,g\ne0.
> $$
> Every factor is nonzero by choice, and $g\ne0$. This contradiction proves existence of the required block and its character assertion.
>
> **(b).** Write $g=\sum_i g_i$ in the direct sum of the newform blocks. For any prime $p\nmid N$, $T_p$ acts on block $i$ by $a_p(f_i)$. Comparing the components in $T_pg=a_p(g)g$ yields
> $$
> (a_p(f_i)-a_p(g))g_i=0.
> $$
> If $g_i\ne0$, then $a_p(f_i)=a_p(g)$ for every $p\nmid N$. The newform $f$ from (a) has the same equalities. Strong Multiplicity One therefore gives $f_i=f$ for every nonzero component. All other components vanish, and $g$ belongs to precisely the stated span. The theorem is used only after all the elementary operator and direct-sum steps have been made explicit.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.8.6, printed p. 200 / PDF p. 214]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Proof boundary:** Strong Multiplicity One is an external theorem explicitly not proved by the textbook [S7, printed p.199/PDF p.213]. The appendix hint for (a) was checked on printed p.423/PDF p.434. The proof is complete conditional on that named input and Theorem 5.8.3.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
