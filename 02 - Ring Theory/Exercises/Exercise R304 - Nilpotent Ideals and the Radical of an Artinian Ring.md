---
title: "Exercise R304: Nilpotent Ideals and the Radical of an Artinian Ring"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - jacobson-radical
  - artinian-rings
  - nilpotent-ideals
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVII, Exercise 5, printed p. 661, PDF p. 676"
created: 2026-09-29
---

# Exercise R304: Nilpotent Ideals and the Radical of an Artinian Ring

## Problem Statement

> [!question] Lang, Chapter XVII, Exercise 5
> (a) Let $J$ be a two-sided nilpotent ideal of $R$. Show that $J$ is contained in the radical.
>
> (b) Conversely, assume that $R$ is Artinian. Show that its radical is nilpotent, i.e., that there exists an integer $r\ge1$ such that $N^r=0$.
>
> **Printed hint.** Consider the descending sequence of powers $N^r$, and apply Nakayama to a minimal finitely generated left ideal $L\subset N^\infty$ such that $N^\infty L\ne0$.

> [!info] Notation and finiteness
> Here $N=J(R)$ and Artinian means left Artinian. The powers eventually stabilize; $N^\infty$ denotes that stable ideal, equivalently $\bigcap_{s\ge1}N^s$ in this setting. Finite generation must be established for the module to which Nakayama is applied; the descending chain condition alone is not being replaced by a Noetherian hypothesis.

## Hints

> [!hint]- Hint 1: Act on a simple module
> If $E$ is simple, then $JE$ is either $0$ or $E$. The second possibility is incompatible with $J^q=0$. For (b), let $I$ be the stable power of $N$ and check $I^2=I$.

> [!hint]- Hint 2: Find a cyclic module on which the stable ideal acts fully
> If $I\ne0$, choose a minimal left ideal $L\subseteq I$ subject to $IL\ne0$. Show first that $L=Rx$ for a suitable $x\in L$, and then that $IL=L$. Now $NL=L$ and the noncommutative Nakayama lemma applies to this cyclic module.

## Solution

> [!success]- Independent derivation without assuming Artinian implies Noetherian
> **(a).** Choose $q\ge1$ with $J^q=0$, and let $E$ be any simple left $R$-module. The set $JE$ of finite sums of products $jx$ is a submodule, because $r(jx)=(rj)x$ and $rj\in J$. Hence $JE=0$ or $JE=E$. If $JE=E$, induction gives $J^mE=E$ for every $m\ge1$, whereas $J^qE=0$, contradicting $E\ne0$. Thus $JE=0$ for every simple module.
>
> For every maximal left ideal $L$, apply this to the simple module $R/L$. Each $j\in J$ then satisfies $j(1+L)=0$, so $j\in L$. Taking the intersection gives $J\subseteq N$.
>
> **(b), stabilize the radical powers.** The radical $N$ is two-sided by R301, so its powers are two-sided ideals and in particular left ideals. Since $R$ is left Artinian, the chain
>
> $$
> N\supseteq N^2\supseteq N^3\supseteq\cdots
> $$
>
> stabilizes. Choose $s\ge1$ with $N^s=N^{s+1}$. Multiplying repeatedly by $N$ shows that $N^m=N^s$ for all $m\ge s$. Put $I=N^s$. Then
>
> $$
> I^2=N^{2s}=I.
> $$
>
> We prove $I=0$, which will give $N^s=0$.
>
> **Choose a minimal module and prove finite generation.** Suppose $I\ne0$. Consider the collection
>
> $$
> \mathcal C=\{L:L\text{ is a left ideal of }R, L\subseteq I, IL\ne0\}.
> $$
>
> It is nonempty because $I\in\mathcal C$, using $I^2=I\ne0$. By the descending chain condition it has a minimal member $L$. Since $IL\ne0$, some $x\in L$ has $Ix\ne0$; otherwise every product generating $IL$ would be zero. The cyclic left ideal $Rx$ lies in $L\subseteq I$ and satisfies $I(Rx)\supseteq Ix\ne0$. Thus $Rx\in\mathcal C$, and minimality gives
>
> $$
> L=Rx.
> $$
>
> In particular, $L$ is finitely generated. This conclusion has been proved directly, without assuming that every left ideal is finitely generated.
>
> **Show the radical acts surjectively on $L$.** The set $IL$ is a left ideal: $r(i\ell)=(ri)\ell$ and $ri\in I$. Also $IL\subseteq L$ since $L$ is a left ideal, and
>
> $$
> I(IL)=I^2L=IL\ne0.
> $$
>
> Hence $IL$ is itself a member of $\mathcal C$ contained in $L$. Minimality implies $IL=L$. Since $I\subseteq N$, we have
>
> $$
> L=IL\subseteq NL\subseteq L,
> $$
>
> so $NL=L$. The noncommutative Nakayama lemma, proved in LA484, applies to the cyclic left module $L$ and gives $L=0$. This contradicts $IL\ne0$. Therefore $I=0$, and the radical is nilpotent.

## Related Concepts

- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian and Artinian Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Finitely Generated Modules|Finitely Generated Modules]]
- [[02 - Ring Theory/Exercises/Exercise R301 - The Jacobson Radical and Simple Modules|Exercise R301]]
- [[02 - Ring Theory/Exercises/Exercise R302 - Descending Chains and Minimal Ideals in Artinian Rings|Exercise R302]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA484 - Nakayama's Lemma over Noncommutative Rings|Exercise LA484]]

## Notes

- **Source and proof status:** Both parts, the bound $r\ge1$, and the complete hint were checked at [S2, Ch. XVII, Ex. 5, printed p. 661, PDF p. 676]. The source's hint has an unclosed bracket; its mathematical text is transcribed in full above. The proof is independently expanded from the stable-power strategy.
- **No circularity:** The proof first chooses a minimal left ideal with a nonzero $I$-action, then proves that it is cyclic, and only then invokes Nakayama. It does not apply the finite-generation lemma directly to $I=N^\infty$, and it does not use the theorem that an Artinian ring is Noetherian.
- **Boundary:** Part (a) concerns a nilpotent two-sided ideal, not an arbitrary nilpotent element of a noncommutative ring. The two assertions differ, for example, for matrix rings.
