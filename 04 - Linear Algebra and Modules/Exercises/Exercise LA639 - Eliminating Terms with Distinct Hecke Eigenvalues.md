---
title: "Exercise LA639: Eliminating Terms with Distinct Hecke Eigenvalues"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.8, Exercise 5.8.5, printed p. 200, PDF p. 214"
source_refs:
  - "S7/ch-5/sec-8/ex-5"
created: 2026-10-28
---

# Exercise LA639: Eliminating Terms with Distinct Hecke Eigenvalues

## Problem Statement

> [!question] Original Exercise 5.8.5
> (a) Show that if $\widetilde\chi_1(d)\ne\widetilde\chi_2(d)$ for some $d\in(\mathbb Z/N\mathbb Z)^*$ then applying $\langle d\rangle-\widetilde\chi_1(d)$ to (5.22) yields a nontrivial relation with fewer terms.
>
> (b) Show that if $a_p(f_1)\ne a_p(f_2)$ for some $p\nmid N$ then applying $T_p-a_p(f_1)$ to (5.22) yields a nontrivial relation with fewer terms. Why does this require $p\nmid N$?
>
> Relation (5.22) is $\sum_{i,j}c_{i,j}f_i(n_{i,j}\tau)=0$, with all $c_{i,j}\ne0$ and the number of terms minimal. Each $f_i$ is a newform of level $M_i\mid N$ and character $\chi_i$, each $n_{i,j}\mid N/M_i$, and $\widetilde\chi_i$ is the lift of $\chi_i$ to modulus $N$.

## Hints

> [!hint]- Hint 1
> Each degeneracy translate retains the lifted diamond character.

> [!hint]- Hint 2
> When $p\nmid N$, it also retains the $T_p$ eigenvalue. Terms belonging to $f_1$ disappear; at least one term belonging to $f_2$ remains.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** If $F_{i,j}(\tau)=f_i(n_{i,j}\tau)$, conjugating a level-$N$ diamond representative by $\operatorname{diag}(n_{i,j},1)$ gives an integral matrix in $\Gamma_0(M_i)$ with the same lower-right entry. Hence $\langle d\rangle F_{i,j}=\widetilde\chi_i(d)F_{i,j}$. Applying the stated operator yields
> $$
> \sum_{i,j}c_{i,j}\bigl(\widetilde\chi_i(d)-\widetilde\chi_1(d)\bigr)F_{i,j}=0.
> $$
> All terms with $i=1$ disappear. At least one term with $i=2$ has nonzero coefficient because its original coefficient is nonzero and the character values differ. Thus after removing zero coefficients this is a nontrivial relation with fewer terms, contradicting minimality.
>
> **(b).** For $p\nmid N$, $p$ divides neither $M_i$ nor $n_{i,j}$. The prime coefficient formula gives
> $$
> T_{p,N}\bigl(f_i(n_{i,j}\tau)\bigr)=(T_{p,M_i}f_i)(n_{i,j}\tau)=a_p(f_i)F_{i,j}.
> $$
> Indeed both its coefficient terms, at indices $pm/n_{i,j}$ and $m/(pn_{i,j})$, match, using $p\nmid n_{i,j}$ and the lifted character value at $p$. Applying the operator in the question now gives
> $$
> \sum_{i,j}c_{i,j}(a_p(f_i)-a_p(f_1))F_{i,j}=0.
> $$
> Again all $i=1$ terms disappear and an $i=2$ term survives. This is the required shorter nontrivial relation.
>
> The condition $p\nmid N$ guarantees compatibility of $T_p$ with every degeneracy translate simultaneously. At a prime dividing a degeneracy index, $T_p$ can lower that index, rather than act diagonally: at level divisible by $p$, $T_p(f(p\tau))=f(\tau)$. At a prime newly dividing the level, the lower-level second coefficient term also changes. Thus the displayed eigenvalue equation is not valid for arbitrary $p\mid N$; the elimination proof cannot use those primes indiscriminately.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.8.5, printed p. 200 / PDF p. 214]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** Relation (5.22) and its minimality assumptions are on printed p.198/PDF p.212. The solution proves only the two elimination steps; completing the independence theorem from equality at good primes additionally uses Strong Multiplicity One, which the source explicitly imports.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
