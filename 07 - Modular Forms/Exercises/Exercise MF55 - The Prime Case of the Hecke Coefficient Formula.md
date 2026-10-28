---
title: "Exercise MF55: The Prime Case of the Hecke Coefficient Formula"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.3, Exercise 5.3.3, printed p. 181, PDF p. 195"
source_refs:
  - "S7/ch-5/sec-3/ex-3"
created: 2026-10-28
---

# Exercise MF55: The Prime Case of the Hecke Coefficient Formula

## Problem Statement

> [!question] Original Exercise 5.3.3
> Check that Proposition 5.3.1 reduces to formula (5.4) when $n=p$ is prime.
>
> **Referenced formulas, printed p. 180 / PDF p. 194 and printed p. 171 / PDF p. 185.** For $f\in M_k(N,\chi)$,
> $$
> a_m(T_nf)=\sum_{d\mid(m,n)}\chi(d)d^{k-1}a_{mn/d^2}(f).
> $$
> Formula (5.4) is $a_m(T_pf)=a_{mp}(f)+\chi(p)p^{k-1}a_{m/p}(f)$, with a coefficient at a noninteger index interpreted as zero.

## Hints

> [!hint]- Hint 1
> A prime has only the positive divisors $1$ and $p$.

> [!hint]- Hint 2
> Separate $p\mid m$ from $p\nmid m$, and include the constant index $m=0$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Set $n=p$ in the divisor sum. The divisor $d=1$ always occurs and contributes $a_{mp}(f)$, since $\chi(1)=1$.
>
> If $p\mid m$, the other divisor is $d=p$ and contributes
> $$
> \chi(p)p^{k-1}a_{mp/p^2}(f)=\chi(p)p^{k-1}a_{m/p}(f).
> $$
> If $p\nmid m$, no such divisor occurs, and the convention $a_{m/p}(f)=0$ makes the same expression valid. At $m=0$, the divisors of $(0,p)=p$ are again $1,p$, giving $a_0(T_pf)=(1+\chi(p)p^{k-1})a_0(f)$, also as in (5.4). When $p\mid N$, $\chi(p)=0$ by extension of the character to all integers, so the second term vanishes. All cases coincide with the stated prime formula.
>
> For general $f\in M_k(\Gamma_1(N))$, the same two-divisor calculation applied to (5.13) gives $a_m(T_pf)=a_{mp}(f)+p^{k-1}a_{m/p}(\langle p\rangle f)$. Restricting to the character eigenspace replaces $\langle p\rangle f$ by $\chi(p)f$, recovering precisely the version requested.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.3.3, printed p. 181 / PDF p. 195]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source status of inputs:** The two original coefficient formulas were checked on their rendered pages. The derivation here is the assigned comparison, including the constant coefficient.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
