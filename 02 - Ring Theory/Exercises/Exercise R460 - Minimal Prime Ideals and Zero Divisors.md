---
title: "Exercise R460: Minimal Prime Ideals and Zero Divisors"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.5, Exercise 8.5.6, printed p. 351, PDF p. 364"
source_refs:
  - "S7/ch-8/sec-5/ex-6"
created: 2026-10-28
---

# Exercise R460: Minimal Prime Ideals and Zero Divisors

## Problem Statement

> [!question] Original Exercise 8.5.6
> Let $R$ be a commutative ring with $1$. This exercise shows that $R$ has minimal prime ideals and that any such ideal is contained in the zero-divisors.
>
> (a) For a descending chain of prime ideals $I_0\supset I_1\supset\cdots$, show that $\bigcap_{n\ge0}I_n$ is prime. Thus $R$ has minimal primes.
>
> (b) Let $P$ be minimal prime. Its localization is $R_P=R(R-P)^{-1}$. The text states that this ring is Noetherian and $PR_P$ is its only prime. Part (c) shows that $PR_P$ contains only zero-divisors; deduce the same for $P$ in $R$.
>
> (c) Let $S$ be Noetherian with only one prime ideal $I$. For $x\ne0$, put $\operatorname{Ann}_S(x)=\{s:sx=0\}$. These ideals contain only zero-divisors, and the ascending-chain condition gives a maximal such annihilator $J=\operatorname{Ann}_S(x)$. Show that $J$ is prime, so $J=I$. (A hint for this exercise is at the end of the book.)

> [!warning] Source issue
> The ring must be nonzero for existence of prime ideals. Also $R_P$ is not necessarily Noetherian for arbitrary commutative $R$; the solution gives a counterexample and supplies the general nilpotence proof. A countable-chain argument alone does not justify the application of Zorn's lemma; arbitrary chains are treated explicitly.

## Hints

> [!hint]- Hint 1
> The intersection argument works for every linearly ordered family of primes, which is what Zorn's lemma needs.

> [!hint]- Hint 2
> In a ring with one prime, all elements of that prime are nilpotent.

> [!hint]- Hint 3
> For (c), enlarge the annihilator from $x$ to $xy$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Assume $R\ne0$, so maximal and prime ideals exist.
>
> **(a)** The intersection $J$ of any nonempty chain of prime ideals is proper. If $ab\in J$ but $a\notin J$, choose a chain member $I_0$ lacking $a$. Primality gives $b\in I_0$. For another member $I$, either $I\subset I_0$, in which case $a\notin I$ and primality gives $b\in I$, or $I_0\subset I$, in which case $b\in I$ already. Thus $b\in J$. This proves primality for arbitrary chains, including the displayed countable one. Zorn's lemma, applied to prime ideals ordered by reverse inclusion, now gives a minimal prime.
>
> **(b)** The localization correspondence identifies primes of $R_P$ with primes of $R$ contained in $P$. Minimality makes $PR_P$ its unique prime. If an element $a/1$ is a zero-divisor in $R_P$, choose a nonzero $b/s$ annihilated by it. Clearing the vanishing gives $t ab=0$ for some $t\notin P$, whereas $tb\ne0$ because its localization is a unit times a nonzero element. Thus $a$ is a zero-divisor in $R$.
>
> The Noetherian assertion requires an extra hypothesis, but the desired conclusion holds without it. The **nilradical theorem** says that the intersection of all primes is the set of nilpotent elements. Therefore every $a/1\in PR_P$ is nilpotent. Choose the least $n\ge1$ with $(a/1)^n=0$. Then $(a/1)^{n-1}\ne0$, and some $t\notin P$ satisfies $ta^n=0$. The element $ta^{n-1}$ is nonzero, since its localization is nonzero, and is annihilated by $a$. This proves the general conclusion, including the case $n=1$.
>
> **(c)** In the stated Noetherian setting, choose a maximal annihilator $J=\operatorname{Ann}(x)$ with $x\ne0$. It is proper. If $yz\in J$ and $y\notin J$, then $xy\ne0$ and
> $$
> J\subset\operatorname{Ann}(xy),\qquad z\in\operatorname{Ann}(xy).
> $$
> Maximality forces $\operatorname{Ann}(xy)=J$, hence $z\in J$. Thus $J$ is prime and equals the unique prime $I$. Every member of $I$ annihilates the same nonzero $x$, as required.
>
> For a counterexample to the source's unrestricted Noetherian assertion, take
> $$
> R=k[X_1,X_2,\ldots]/(X_1^2,X_2^2,\ldots).
> $$
> Every variable class is nilpotent; the ideal $P=(X_1,X_2,\ldots)$ is its unique prime and the ring is already local, so $R_P=R$. The ideal $P$ is not finitely generated: any finite list of polynomial generators involves only finitely many variables and cannot generate the class of a new variable. Thus $R_P$ need not be Noetherian.

## Related Concepts

- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 351 / PDF p. 364. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
