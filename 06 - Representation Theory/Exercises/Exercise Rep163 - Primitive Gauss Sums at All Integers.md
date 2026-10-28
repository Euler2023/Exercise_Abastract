---
title: "Exercise Rep163: Primitive Gauss Sums at All Integers"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 4, Section 4.3, Exercise 4.3.2, printed p. 119, PDF p. 133"
source_refs:
  - "S7/ch-4/sec-3/ex-2"
created: 2026-10-28
---

# Exercise Rep163: Primitive Gauss Sums at All Integers

## Problem Statement

> [!question] Original Exercise 4.3.2
> Let $\chi$ be a primitive Dirichlet character modulo $N$ and let $m$ be an integer. Prove formula (4.11) as follows.
>
> (a) First assume that $\gcd(m,N)=1$. Use the fact that $\overline\chi(m)\chi(m)=1$ to prove the formula.
>
> (b) Now assume that $\gcd(m,N)>1$. Let $g=\gcd(m,N)$, so that $m=m'g$ and $N=N'g$. Show that
> $$
> \sum_{n=0}^{N-1}\chi(n)\mu_N^{nm}=\sum_{n'=0}^{N'-1}\left(\sum_{\substack{n=0\\n\equiv n'\ (N')}}^{N-1}\chi(n)\right)\mu_{N'}^{n'm'}.\tag{4.14}
> $$
> Let $K=K_{N,N'}=\{n\in(\mathbb Z/N\mathbb Z)^*:n\equiv1\pmod{N'}\}$. Use primitivity to show that $\sum_{n\in K}\chi(n)=0$. Since $(\mathbb Z/N\mathbb Z)^*=\bigsqcup_{n'}n'K$, where the representatives $n'$ taken modulo $N'$ run through $(\mathbb Z/N'\mathbb Z)^*$, show that the inner sum in (4.14) is $\sum_{n\in n'K}\chi(n)$, and that this is $0$. Explain why formula (4.11) follows.
>
> Here $\mu_N=e^{2\pi i/N}$, $g(\chi)=\sum_{n=0}^{N-1}\chi(n)\mu_N^n$, and (4.11) states that the left side is $\overline\chi(m)g(\chi)$.

## Hints

> [!hint]- Hint 1
> For a unit $m$, substitute $r=mn$ modulo $N$.

> [!hint]- Hint 2
> The reduction from units modulo $N$ onto units modulo $N'$ is surjective. A primitive character cannot be trivial on its kernel when $N'<N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** Multiplication by the unit $m$ permutes residues modulo $N$. With $r=mn$ and the character extended by zero to nonunits,
> $$
> \sum_n\chi(n)\mu_N^{nm}=\sum_r\chi(m^{-1}r)\mu_N^r=\chi(m)^{-1}g(\chi)=\overline\chi(m)g(\chi).
> $$
> **(b).** Since $\mu_N^{nm}=\mu_{N'}^{nm'}$, this exponential depends only on $n\pmod{N'}$. Grouping by that class proves (4.14).
>
> Reduction $G_N\to G_{N'}$ is onto: given a class coprime to $N'$, choose a representative congruent to it modulo $N'$ and nonzero modulo every prime dividing $N$ but not $N'$, by the Chinese remainder theorem. This representative is coprime to $N$. Its kernel is $K$. If $\chi$ were trivial on $K$, it would factor through the quotient $G_{N'}$, giving a character induced from a proper divisor $N'<N$, contradicting primitivity. Therefore $\chi|_K$ is nontrivial, and the finite character-sum argument of Exercise 4.3.1 gives $\sum_{u\in K}\chi(u)=0$.
>
> If $n'$ is a nonunit modulo $N'$, every integer in that class is a nonunit modulo $N$, so its inner sum is zero directly. If $n'$ is a unit, choose any unit lift $a\pmod N$. The unit residues in that fiber are precisely the coset $aK$, while all nonunits contribute zero. Its sum is
> $$
> \sum_{u\in K}\chi(au)=\chi(a)\sum_{u\in K}\chi(u)=0.
> $$
> Thus every inner sum in (4.14) vanishes, and the left side is zero. The right side of (4.11) is also zero because $(m,N)>1$ implies $\overline\chi(m)=0$. This proves the formula at all integers, including $m=0$ when $N>1$. When $N=1$ only (a) applies and both sides are $1$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters]]
- [[06 - Representation Theory/Concepts/Representation Theory]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 4.3.2, printed p. 119 / PDF p. 133]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Expanded source reference:** Formula (4.11) and Gauss-sum definitions are on printed p.118/PDF p.132. In the source's coset notation $n'K$, $n'$ denotes a chosen unit lift; when the residue class is nonunit its fiber contributes zero rather than being a group coset.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
