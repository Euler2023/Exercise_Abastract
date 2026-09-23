---
title: "Exercise R288: Structure of Commutative Artinian Rings"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - artinian-rings
  - noetherian-rings
  - nilradical
  - localization
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 9, printed pp. 443-444, PDF pp. 458-459"
created: 2026-09-22
---

# Exercise R288: Structure of Commutative Artinian Rings

## Problem Statement

> [!question] Lang, Chapter X, Exercise 9
> Let $A$ be an Artinian commutative ring. Prove:
>
> (a) All prime ideals are maximal. [*Hint:* Given a prime ideal $\mathfrak p$, let $x\in A$, $x(\mathfrak p)=0$. Consider the descending chain $(x)\supset(x^2)\supset(x^3)\supset\cdots$.]
>
> (b) There is only a finite number of prime, or maximal, ideals. [*Hint:* Among all finite intersections of maximal ideals, pick a minimal one.]
>
> (c) The ideal $N$ of nilpotent elements in $A$ is nilpotent, that is there exists a positive integer $k$ such that $N^k=(0)$. [*Hint:* Let $k$ be such that $N^k=N^{k+1}$. Let $\mathfrak a=N^k$. Let $\mathfrak b$ be a minimal ideal $\ne0$ such that $\mathfrak b\mathfrak a\ne0$. Then $\mathfrak b$ is principal and $\mathfrak b\mathfrak a=\mathfrak b$.]
>
> (d) $A$ is Noetherian.
>
> (e) There exists an integer $r$ such that
>
> $$
> A=\prod A/\mathfrak m^r
> $$
>
> where the product is taken over all maximal ideals.
>
> (f) We have
>
> $$
> A=\prod A_{\mathfrak p},
> $$
>
> where again the product is taken over all prime ideals $\mathfrak p$.

> [!warning] Source issue in the hint to (a)
> The original page prints $x(\mathfrak p)=0$, as retained above. To prove that $A/\mathfrak p$ is a field, the chain argument must instead be applied to a nonzero residue class $x+\mathfrak p$, that is, to $x\notin\mathfrak p$. The solution uses this corrected condition. The equalities in (e) and (f) mean canonical ring isomorphisms.

## Hints

> [!hint]- Hint 1
> Prove (a) in the domain $A/\mathfrak p$, and then use the minimal intersection from (b) to capture every maximal ideal. In (c), do not assume that $N$ is finitely generated: that would use the Noetherian conclusion before proving it.

> [!hint]- Hint 2
> For (c), a nonzero stabilized ideal $\mathfrak a=N^k$ satisfies $\mathfrak a^2=\mathfrak a$. The minimal ideal $\mathfrak b$ with $\mathfrak a\mathfrak b\ne0$ is principal and satisfies $\mathfrak a\mathfrak b=\mathfrak b$; a generator would then be fixed by a nilpotent scalar. For (d), filter $A$ by the powers of $N$ and view each quotient as an Artinian module over the finite product of fields $A/N$. For (e) and (f), use the Chinese remainder theorem and then localize the resulting finite product.

## Solution

> [!success]- Independently derived solution
> We assume rings have identity. The zero ring satisfies the assertions with empty spectra and the empty product interpreted as the zero ring, so suppose $A\ne0$. Artinian means that every descending chain of ideals stabilizes. Equivalently, every nonempty collection of ideals has a minimal member.
>
> ### (a) Every prime is maximal
>
> Let $\mathfrak p$ be prime. The quotient $D=A/\mathfrak p$ is an Artinian domain: ideals of the quotient correspond to ideals containing $\mathfrak p$, so descending chains stabilize.
>
> For $0\ne y\in D$, the chain $(y)\supseteq(y^2)\supseteq\cdots$ stabilizes. Thus $(y^n)=(y^{n+1})$ for some $n\ge1$, and there is $z\in D$ with $y^n=zy^{n+1}$. Cancellation in the domain gives $1=zy$. Every nonzero element of $D$ is invertible, so $D$ is a field and $\mathfrak p$ is maximal.
>
> ### (b) There are finitely many maximal ideals
>
> By the descending chain condition, choose a minimal member
>
> $$
> I=\mathfrak m_1\cap\cdots\cap\mathfrak m_t
> $$
>
> among the finite nonempty intersections of maximal ideals, removing repeated factors. For any maximal ideal $\mathfrak m$, the intersection $I\cap\mathfrak m$ is another such member and is contained in $I$, so minimality gives $I\cap\mathfrak m=I$. Hence
>
> $$
> \mathfrak m_1\cdots\mathfrak m_t
> \subseteq I\subseteq\mathfrak m.
> $$
>
> The prime-ideal product criterion, applied repeatedly, gives $\mathfrak m_j\subseteq\mathfrak m$ for some $j$. Maximality implies $\mathfrak m_j=\mathfrak m$. Thus the displayed list contains all maximal ideals, and by (a) it also contains all prime ideals.
>
> ### (c) The nilradical is nilpotent without a Noetherian assumption
>
> In a commutative ring, nilpotent elements form an ideal $N$: scalar multiples stay nilpotent, and if $u^a=v^b=0$, then $(u+v)^{a+b-1}=0$ by the binomial expansion.
>
> The descending chain $N\supseteq N^2\supseteq\cdots$ stabilizes, say $N^k=N^{k+1}$ with $k\ge1$. Set $\mathfrak a=N^k$. All subsequent powers equal $\mathfrak a$, so $\mathfrak a^2=N^{2k}=\mathfrak a$.
>
> Suppose $\mathfrak a\ne0$. Choose a minimal ideal $\mathfrak b$ such that $\mathfrak a\mathfrak b\ne0$; this collection is nonempty because it contains $A$. Some $x\in\mathfrak b$ satisfies $\mathfrak a x\ne0$, since otherwise every product generating $\mathfrak a\mathfrak b$ would be zero. Thus $(x)\subseteq\mathfrak b$ is also in the collection, and minimality gives $\mathfrak b=(x)$.
>
> Moreover,
>
> $$
> \mathfrak a(\mathfrak a\mathfrak b)
> =\mathfrak a^2\mathfrak b
> =\mathfrak a\mathfrak b\ne0.
> $$
>
> Since $\mathfrak a\mathfrak b\subseteq\mathfrak b$, minimality gives $\mathfrak a\mathfrak b=\mathfrak b$. Consequently $x\in\mathfrak a(x)$, so $x=cx$ for some $c\in\mathfrak a$. Here a finite sum of coefficients in $\mathfrak a$ is still one coefficient in $\mathfrak a$.
>
> As $\mathfrak a\subseteq N$, the element $c$ is nilpotent. Therefore $1-c$ is invertible: if $c^h=0$, its inverse is $1+c+\cdots+c^{h-1}$. The equality $(1-c)x=0$ forces $x=0$, contradicting $\mathfrak a x\ne0$. Hence $\mathfrak a=N^k=0$.
>
> ### (d) The ring is Noetherian
>
> First recall why $N$ is the intersection of all prime ideals. Every prime contains every nilpotent element. If $u$ is not nilpotent, the powers $\{1,u,u^2,\ldots\}$ avoid the zero ideal. By Zorn's lemma there is an ideal $P$ maximal among those disjoint from this multiplicative set. It is prime: if $ab\in P$ with $a,b\notin P$, each of $P+(a)$ and $P+(b)$ meets the set, and multiplying the two corresponding powers of $u$ gives a power in $P$, a contradiction. Thus $u\notin P$, proving the reverse inclusion.
>
> By (a) and (b), it follows that $N=\bigcap_{j=1}^t\mathfrak m_j$. Distinct maximal ideals are comaximal, so the Chinese remainder theorem gives
>
> $$
> A/N\cong\prod_{j=1}^t A/\mathfrak m_j.
> $$
>
> This is a finite product of fields. Each layer
>
> $$
> L_i=N^i/N^{i+1}\qquad(0\le i<k),\qquad N^0=A,
> $$
>
> is an Artinian $A$-module: its submodules correspond to ideals between $N^{i+1}$ and $N^i$. It is annihilated by $N$, hence is an Artinian module over $A/N$.
>
> For a module over a finite product of fields, the coordinate idempotents decompose it as a finite direct sum of vector spaces over the respective fields. Each of these vector spaces is Artinian here, hence finite-dimensional. Indeed, an infinite basis would give a strictly descending chain of spans by successively deleting basis vectors. Thus every $L_i$ is Noetherian.
>
> To pass from the layers to $A$, use the elementary extension argument: if $U\subseteq V$ and both $U$ and $V/U$ are Noetherian, then for any submodule $W\subseteq V$, choose finitely many generators of $W\cap U$ and lift finitely many generators of the image of $W$ in $V/U$. Together these elements generate $W$, proving that $V$ is Noetherian.
>
> Apply this argument along the finite filtration
>
> $$
> 0=N^k\subseteq N^{k-1}\subseteq\cdots\subseteq N\subseteq A.
> $$
>
> It proves that $A$ is Noetherian as a module over itself, that is, every ideal of $A$ is finitely generated.
>
> ### (e) Product of quotients by powers of maximal ideals
>
> Choose $r\ge1$ with $N^r=0$, as in (c). The ideals $\mathfrak m_j^r$ are pairwise comaximal. To see this, if $a\in\mathfrak m_i$, $b\in\mathfrak m_j$, and $a+b=1$, expand $(a+b)^{2r-1}$: every term belongs to $\mathfrak m_i^r$ or $\mathfrak m_j^r$.
>
> For finitely many pairwise comaximal ideals, their intersection equals their product. Therefore
>
> $$
> \bigcap_{j=1}^t\mathfrak m_j^r
> =\prod_{j=1}^t\mathfrak m_j^r
> =\left(\prod_{j=1}^t\mathfrak m_j\right)^r
> =N^r=0.
> $$
>
> The Chinese remainder map is consequently an isomorphism
>
> $$
> A\xrightarrow{\ \sim\ }\prod_{j=1}^t A/\mathfrak m_j^r,
> \qquad a\longmapsto(a+\mathfrak m_j^r)_j.
> $$
>
> Each factor is local: a maximal ideal containing $\mathfrak m_j^r$ contains $\mathfrak m_j$ by primality, and hence equals $\mathfrak m_j$.
>
> ### (f) Product of the localizations
>
> Write $C_j=A/\mathfrak m_j^r$ and use (e) to identify $A$ with $\prod_j C_j$. Under this identification, $\mathfrak m_j$ has the maximal ideal of $C_j$ in its $j$th coordinate and all of $C_\ell$ in every other coordinate.
>
> Let $e_j$ be the coordinate idempotent with $1$ in position $j$ and $0$ elsewhere. Since $e_j\notin\mathfrak m_j$, it becomes invertible in $A_{\mathfrak m_j}$. An invertible idempotent equals $1$, and $e_je_\ell=0$ then forces every $e_\ell$, $\ell\ne j$, to vanish in this localization.
>
> Thus all factors other than $C_j$ disappear. Every denominator outside $\mathfrak m_j$ has a unit in its $j$th coordinate, so no further localization of the local ring $C_j$ is needed. Explicitly,
>
> $$
> A_{\mathfrak m_j}\longrightarrow C_j,\qquad
> a/s\longmapsto a_j s_j^{-1}
> $$
>
> is an isomorphism; its inverse sends $c\in C_j$ to the image of the tuple with $c$ in coordinate $j$ and zero elsewhere. This inverse is unital because $e_j$ becomes $1$.
>
> Combining the isomorphisms for all $j$, and using (a), gives
>
> $$
> A\xrightarrow{\ \sim\ }\prod_{\mathfrak p\in\operatorname{Spec}A}A_{\mathfrak p},
> \qquad a\longmapsto(a/1)_{\mathfrak p}.
> $$

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Exercises/Exercise R281 - Products of Ideals Contained in a Prime Ideal|Exercise R281]]
- [[02 - Ring Theory/Exercises/Exercise R287 - Idempotents in a Local Ring|Exercise R287]]

## Notes

- **Source status:** All six subparts and all printed hints were visually checked at [S2, Ch. X, Ex. 9, printed pp. 443-444, PDF pp. 458-459]. A higher-resolution crop confirms the printed equality in the hint to (a); its correction is stated visibly above. The proof is independently supplied.
- **No circularity:** Part (c) uses the descending chain condition and a minimal ideal, without assuming $A$ or $N$ is Noetherian. Only after nilpotence is established does part (d) deduce the ascending chain condition.
- **Proof inputs:** The Chinese remainder theorem and elementary facts about ideals, quotients, and localization are used as in the linked concepts. The prime-intersection description of the nilradical and the Noetherian extension argument are proved within this solution. Existence of a maximal ideal and the prime-avoidance construction use Zorn's lemma.
- **Artinian modules versus rings:** A general Artinian module need not be Noetherian. Here the finite product of residue fields and the finite nilpotent filtration supply the extra ring structure needed for (d).
