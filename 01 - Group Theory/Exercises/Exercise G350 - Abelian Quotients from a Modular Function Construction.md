---
title: "Exercise G350: Abelian Quotients from a Modular Function Construction"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - abelian-groups
source: "Adapted from I. R. Shafarevich, On the problem of the 10th discriminant, St. Petersburg Mathematical Journal 25 (2014), 699–711, §2, Lemma 4 and its following cyclic quotient, printed p. 706, PDF p. 8"
paper_refs:
  - "paper/shafarevich-2014/sec-2/lemma-4"
created: 2026-10-26
---

# Exercise G350: Abelian Quotients from a Modular Function Construction

## Problem Statement

> [!question] Adapted proof exercise
> Let $A$ be the **abelian** group given by the presentation
> $$
> A=\langle s,t\mid st=ts,\ s^8=t^8=1,\ (st^{-1})^4=1\rangle.
> $$
> This is the abstract abelian presentation appearing in Shafarevich's Lemma 4.
>
> **(a)** Put $r=st^{-1}$. Prove by constructing inverse homomorphisms that $A\cong C_4\times C_8$. Determine the exact orders of $r,s,t$.
>
> **(b)** Determine $A/\langle r\rangle$. Show that every cyclic quotient of $A$ has order dividing $8$, and that each divisor of $8$ occurs.
>
> **(c)** Count the surjective homomorphisms $A\to C_8$ and classify their distinct kernels.

## Hints

> [!hint]- Hint 1
> Express $s$ as $rt$. Compare the presentation with two commuting generators having orders dividing $4$ and $8$.

> [!hint]- Hint 2
> Write $C_8$ additively. If $s\mapsto u$ and $t\mapsto v$, the relation is $4(u-v)=0$. For kernel classification, normalize $v$ to $1$ by an automorphism of $C_8$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent finite-group calculation from the displayed presentation.
>
> **(a)** Since $r=st^{-1}$, the elements $r,t$ commute, $r^4=1$, $t^8=1$, and $s=rt$. Thus there is a surjection
> $$
> f:C_4\times C_8\longrightarrow A,\qquad (1,0)\mapsto r,\quad(0,1)\mapsto t.
> $$
> Conversely define
> $$
> g(s)=(1,1),\qquad g(t)=(0,1).
> $$
> These elements commute, their eighth powers are trivial, and $g(st^{-1})=(1,0)$ has fourth power trivial. Hence $g$ respects every defining relation. The composites fix the respective generators, so $f$ and $g$ are inverse. In particular,
> $$
> |A|=32,\qquad |r|=4,\qquad |s|=|t|=8.
> $$
>
> **(b)** Under this isomorphism, $\langle r\rangle=C_4\times\{0\}$, so $A/\langle r\rangle\cong C_8$. Every element of $A$ has eighth power $1$. The generator of any cyclic quotient therefore has order dividing $8$. Projection onto $C_8$, followed by reduction to $C_d$ for $d\mid8$, supplies all four orders $1,2,4,8$.
>
> **(c)** A homomorphism to $\mathbb Z/8\mathbb Z$ is determined by $u,v$ with
> $$
> 4(u-v)=0\pmod8,
> $$
> equivalently, $u$ and $v$ have the same parity. Its image is all of $\mathbb Z/8\mathbb Z$ exactly when at least one of $u,v$ is odd; the parity condition then makes both odd. There are $4\cdot4=16$ surjections.
>
> Multiplication in the target by $v^{-1}$ normalizes $v$ to $1$. The normalized value of $u$ is one of $1,3,5,7$, so write $u=1+2k$ with $k=0,1,2,3$. Then $r\mapsto2k$, and the kernel is
> $$
> K_k=\langle rt^{-2k}\rangle.
> $$
> Indeed, writing an element uniquely as $r^it^j$ with $i$ modulo $4$ and $j$ modulo $8$, it lies in the kernel precisely when $j=-2ki$ modulo $8$. The four subgroups are distinct: the unique element of $K_k$ whose $C_4$ coordinate is $1$ has $C_8$ coordinate $-2k$. Each kernel has order $4$.
>
> Finally, two surjections have the same kernel exactly when they differ by an automorphism of their common quotient $C_8$. Its four automorphisms account for $16/4=4$ kernels, agreeing with the explicit list.

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups]]
- [[01 - Group Theory/Concepts/Cyclic Groups]]
- [[01 - Group Theory/Concepts/Quotient Groups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms]]

## Notes

- **Adaptation:** The source supplies the abelian presentation and uses the quotient obtained by killing $st^{-1}$. The invariant-factor identification and classification of all surjections are additional exercise tasks. The commutativity relation is essential and has been stated explicitly.
- **Source boundary:** The presentation occurs in the construction of modular functions. This note proves its abstract group consequences; the identification of a congruence-group abelianization with that presentation is a separate source claim.
- **Routing:** Finite abelian groups, explicit homomorphisms, and quotient kernels are the primary tools.
- **Tracking:** The descriptive paper reference preserves the original lemma number. It does not assign or renumber a textbook source ID.
