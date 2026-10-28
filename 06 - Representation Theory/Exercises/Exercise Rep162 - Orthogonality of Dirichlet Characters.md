---
title: "Exercise Rep162: Orthogonality of Dirichlet Characters"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.3, Exercise 4.3.1, printed p. 119, PDF p. 133"
source_refs:
  - "S7/ch-4/sec-3/ex-1"
created: 2026-10-28
---

# Exercise Rep162: Orthogonality of Dirichlet Characters

## Problem Statement

> [!question] Original Exercise 4.3.1
> Prove the orthogonality relations. (A hint for this exercise is at the end of the book.)
>
> For $G_N=(\mathbb Z/N\mathbb Z)^*$ and its character group $\widehat G_N$, they are
> $$
> \sum_{n\in G_N}\chi(n)=\begin{cases}\phi(N),&\chi=1,\\0,&\chi\ne1,\end{cases}\qquad
> \sum_{\chi\in\widehat G_N}\chi(n)=\begin{cases}\phi(N),&n=1,\\0,&n\ne1.\end{cases}
> $$
> The extended versions sum $n=0,\ldots,N-1$ in the first formula and allow every integer $n$ in the second, with the second condition $n\equiv1\pmod N$.

## Hints

> [!hint]- Hint 1
> Translate a finite character sum by an element on which the character is not one.

> [!hint]- Hint 2
> For the dual sum, multiply all characters by a character detecting the given nonidentity element.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> For a nontrivial character $\chi$, choose $a\in G_N$ with $\chi(a)\ne1$. Multiplication by $a$ permutes $G_N$, so for $S=\sum_n\chi(n)$ we have $S=\sum_n\chi(an)=\chi(a)S$. Thus $S=0$. A trivial character contributes $1$ on each of the $\phi(N)$ group elements.
>
> To prove the dual relation, characters separate group elements. Here is a verification of that input: the finite abelian group structure theorem writes $G_N\simeq\prod_jC_{r_j}$; on a cyclic factor a generator can be sent to $e^{2\pi i/r_j}$. If $n\ne1$, one of its coordinates is nonzero, and the corresponding character $\psi$ satisfies $\psi(n)\ne1$. Also this description supplies exactly $\prod_jr_j=|G_N|=\phi(N)$ characters. Multiplication by $\psi$ permutes them. Therefore $T=\sum_\chi\chi(n)$ satisfies $T=\psi(n)T$, giving $T=0$. At $n=1$ each summand is $1$, giving $\phi(N)$.
>
> For the extended first relation, character values at nonunit residues are zero, so the sum is unchanged. For the extended second relation, if $n$ is not a unit all summands are zero. If it is a unit, apply the proved relation to its class. At $N=1$ the sole residue is the identity and the sole character is $1$, so both assertions still hold with $\phi(1)=1$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.3.1, printed p. 119 / PDF p. 133]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** The group orthogonality formulas are on printed p.117/PDF p.131, and their extended versions on printed p.118/PDF p.132. The finite abelian group structure theorem is the named algebraic input used to exhibit separating characters.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
