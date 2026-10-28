---
title: "Exercise R447: Regrouping the Hecke Divisor Sums"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.3, Exercise 5.3.4, printed p. 181, PDF p. 195"
source_refs:
  - "S7/ch-5/sec-3/ex-4"
created: 2026-10-28
---

# Exercise R447: Regrouping the Hecke Divisor Sums

## Problem Statement

> [!question] Original Exercise 5.3.4
> Convince yourself that the two expressions computed in the proof of Proposition 5.3.1 regroup to formula (5.14) as claimed.
>
> **Referenced expressions, printed p. 181 / PDF p. 195.** The prime-power expression after cancellation is
> $$
> a_{mp^r}(f)+\chi(p)p^{k-1}
> \sum_{d\mid(m/p,p^{r-1})}\chi(d)d^{k-1}a_{mp^{r-2}/d^2}(f).
> $$
> The sum is empty if $p\nmid m$. The coprime expression, for $(n_1,n_2)=1$, is
> $$
> \sum_{d\mid(m,n_1)}\chi(d)d^{k-1}
> \sum_{e\mid(mn_1/d^2,n_2)}\chi(e)e^{k-1}a_{mn_1n_2/(de)^2}(f).
> $$
> The target formula (5.14) is $a_m(T_nf)=\sum_{u\mid(m,n)}\chi(u)u^{k-1}a_{mn/u^2}(f)$.

## Hints

> [!hint]- Hint 1
> In the prime-power sum, replace $d$ by $u=pd$.

> [!hint]- Hint 2
> In the coprime sum, replace $(d,e)$ by $u=de$. Prove that this is a bijection of the divisor indexing sets.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **Prime powers.** For $r\geq2$, put $u=pd$ in the nonleading sum. Its indexing conditions become $p\mid u$, $u\mid m$, and $u\mid p^r$. Its summand becomes
> $$
> \chi(p)\chi(d)(pd)^{k-1}a_{mp^{r-2}/d^2}
> =\chi(u)u^{k-1}a_{mp^r/u^2}.
> $$
> This uses complete multiplicativity of the extended Dirichlet character, including zero values. The leading term is exactly the $u=1$ summand. Together these give every divisor $u\mid(m,p^r)$ once, proving (5.14) for $n=p^r$. If $p\nmid m$, only $u=1$ exists, matching the empty-sum convention. The same reasoning works for $m=0$, when all positive divisors of $p^r$ divide $m$.
>
> The cancellation preceding this expression can also be made explicit. The terms indexed by $D>1$ with $D\mid(mp,p^{r-1})$ have $D=pd$ with $d\mid(m,p^{r-2})$. Under this substitution they agree term by term with the subtracted sum $\chi(p)p^{k-1}\sum_{d\mid(m,p^{r-2})}\chi(d)d^{k-1}a_{mp^{r-2}/d^2}$. Thus no term has been omitted by cancellation.
>
> **Coprime indices.** Suppose $(n_1,n_2)=1$. For $d\mid(m,n_1)$, the integer $mn_1/d^2=(m/d)(n_1/d)$ is defined, and $n_1/d$ is coprime to $n_2$. Therefore
> $$
> e\mid(mn_1/d^2,n_2)
> \Longleftrightarrow e\mid(m/d,n_2)
> \Longleftrightarrow e\mid(m,n_2).
> $$
> The last equivalence uses $(e,d)=1$, since $e\mid n_2$ and $d\mid n_1$. Hence $d$ and $e$ are coprime, and $u=de$ divides both $m$ and $n_1n_2$.
>
> Conversely, every divisor $u\mid(m,n_1n_2)$ has a unique factorization $u=de$ by assigning its prime-power factors to $n_1$ or $n_2$, which have disjoint prime supports. The resulting $d,e$ satisfy the preceding conditions. This is a bijection, and under it
> $$
> \chi(d)\chi(e)d^{k-1}e^{k-1}a_{mn_1n_2/(de)^2}
> =\chi(u)u^{k-1}a_{mn_1n_2/u^2}.
> $$
> Reindexing the finite sum therefore yields (5.14) for $n=n_1n_2$. These two reindexings supply both steps requested in the exercise.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dirichlet Convolution and Mobius Inversion]]
- [[02 - Ring Theory/Concepts/Formal Power Series]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.3.4, printed p. 181 / PDF p. 195]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** The target formula and induction setup were checked on printed p. 180 / PDF p. 194, and the two regroupings on printed p. 181 / PDF p. 195. The proof replaces the source's inspection steps by explicit bijections of indexing sets.
- **Arithmetic convention:** All divisor variables are positive. No convergence argument is involved in reindexing these finite sums.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
