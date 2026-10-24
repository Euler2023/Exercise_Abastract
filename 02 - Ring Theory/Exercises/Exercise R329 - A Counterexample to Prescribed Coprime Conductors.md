---
title: "Exercise R329: A Counterexample to Prescribed Coprime Conductors"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
  - primitive-elements
  - orders
  - conductors
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §8, Exercise 2, printed p. 52, PDF p. 71"
source_status: source-error
created: 2026-10-02
---

# Exercise R329: A Counterexample to Prescribed Coprime Conductors

## Problem Statement

In the section's notation, $\mathfrak o$ is a Dedekind domain with fraction field $K$, $L/K$ is finite, and $\mathcal O$ is the integral closure of $\mathfrak o$ in $L$.

> [!question] Neukirch I.8.2 — faithful mathematical restatement of the printed claim
> For every integral ideal $\mathfrak A$ of $\mathcal O$, show that there is $\theta\in\mathcal O$ with $L=K(\theta)$ such that the conductor
> $$
> \mathfrak F_\theta
> =\{\alpha\in\mathcal O:\alpha\mathcal O\subseteq\mathfrak o[\theta]\}
> $$
> is relatively prime to $\mathfrak A$.

> [!warning] Source issue: the printed claim is false
> Here "relatively prime" means $\mathfrak F_\theta+\mathfrak A=\mathcal O$. The claim already fails for $\mathfrak o=\mathbb Z$, $K=\mathbb Q$, a separable cubic number field $L$, and $\mathfrak A=2\mathcal O_L$. The solution below refutes the printed claim; it does not purport to prove it. The field still has an integral primitive element. The obstruction is single generation of the integer ring modulo $2$.

## Hints

> [!hint]- Hint 1: A conductor condition forces generation in a quotient
> If $\mathfrak F_\theta+2\mathcal O_L=\mathcal O_L$, choose $c\in\mathfrak F_\theta$ with $c\equiv1\pmod{2\mathcal O_L}$. For $z\in\mathcal O_L$, the element $cz$ lies in $\mathbb Z[\theta]$ and has the same residue as $z$.

> [!hint]- Hint 2: A finite algebra that cannot have one generator
> Every element $u$ of $\mathbb F_2^3$ satisfies $u^2=u$. Thus $\mathbb F_2[u]$ has dimension at most $2$, whereas $\mathbb F_2^3$ has dimension $3$.

> [!hint]- Hint 3: Dedekind's cubic field
> Let $\gamma^3-\gamma^2-2\gamma-8=0$ and put $\beta=(\gamma^2-\gamma)/2$. Compute $\gamma^2$, $\gamma\beta$, and $\beta^2$ in the basis $1,\gamma,\beta$. Its trace discriminant is $-503$, which is square-free.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation of a counterexample
>
> ### 1. Construct the cubic field and an integral order
> Let
> $$
> f(T)=T^3-T^2-2T-8,\qquad L=\mathbb Q(\gamma),\qquad f(\gamma)=0.
> $$
> Modulo $3$, $f$ becomes $T^3+2T^2+T+1$. Its values at $0,1,2$ are respectively $1,2,1$, so this cubic has no root in $\mathbb F_3$ and is irreducible there. Since $f$ is monic, reduction modulo $3$ proves irreducibility over $\mathbb Q$. Thus $[L:\mathbb Q]=3$, and $\gamma$ is both integral and primitive.
>
> Put $\beta=(\gamma^2-\gamma)/2$. The equation for $\gamma$ gives
> $$
> \gamma^2=\gamma+2\beta,\qquad
> \gamma\beta=\gamma+4,\qquad
> \beta^2=\beta+2\gamma-2.
> $$
> For example, $\gamma\beta=(\gamma^3-\gamma^2)/2=\gamma+4$; and $\gamma^4=3\gamma^2+10\gamma+8$ gives the formula for $\beta^2$. Consequently
> $$
> \beta^3=\beta^2+2\gamma\beta-2\beta
> =2\beta^2-3\beta+10.
> $$
> Hence $\beta$ satisfies the monic polynomial $T^3-2T^2+3T-10$ and is integral. The multiplication formulas show that
> $$
> R=\mathbb Z\oplus\mathbb Z\gamma\oplus\mathbb Z\beta
> $$
> is a subring of $\mathcal O_L$. The three displayed elements are a rational basis because $\beta=(\gamma^2-\gamma)/2$ and $1,\gamma,\gamma^2$ are a basis. Thus $R$ is an order.
>
> ### 2. Prove that this order is the full integer ring
> Write $\operatorname{Tr}=\operatorname{Tr}_{L/\mathbb Q}$. Vieta's formulas give $\operatorname{Tr}(1)=3$, $\operatorname{Tr}(\gamma)=1$, and $\operatorname{Tr}(\gamma^2)=5$. Therefore
> $$
> \operatorname{Tr}(\beta)=2,\qquad
> \operatorname{Tr}(\gamma\beta)=13,\qquad
> \operatorname{Tr}(\beta^2)=-2.
> $$
> The trace matrix and its determinant are
> $$
> G=\begin{pmatrix}3&1&2\\1&5&13\\2&13&-2\end{pmatrix},
> \qquad \operatorname{disc}(R)=\det G=-503.
> $$
> The integer $503$ is prime: none of $2,3,5,7,11,13,17,19$, the primes at most $\sqrt{503}$, divides it.
>
> We spell out the lattice argument behind the square-free discriminant test. If $z\in\mathcal O_L$, then $\operatorname{Tr}(z)$, $\operatorname{Tr}(z\gamma)$, and $\operatorname{Tr}(z\beta)$ are integers, because the products are integral. Writing $z$ in the rational basis $1,\gamma,\beta$ and solving the system with matrix $G$ shows that all its coordinates lie in $\frac1{503}\mathbb Z$. Hence
> $$
> R\subseteq\mathcal O_L\subseteq\frac1{503}R.
> $$
> It follows that $\mathcal O_L$ is a free rank-three integer lattice and $m=[\mathcal O_L:R]$ is finite. For an integer basis of $\mathcal O_L$, the coordinate matrix of the basis of $R$ has determinant of absolute value $m$. Changing basis in the trace matrix gives
> $$
> -503=m^2\operatorname{disc}(\mathcal O_L).
> $$
> The latter discriminant is an integer, since all its trace entries are integers. Thus $m^2$ divides $503$, forcing $m=1$. We have proved
> $$
> \mathcal O_L=\mathbb Z\oplus\mathbb Z\gamma\oplus\mathbb Z\beta.
> $$
>
> ### 3. Compute the quotient modulo $2$
> Let $x,y$ denote the residues of $\gamma,\beta$. The multiplication formulas reduce to
> $$
> x^2=x,\qquad xy=x,\qquad y^2=y.
> $$
> The basis above shows that $1,x,y$ is an $\mathbb F_2$-basis of $\mathcal O_L/2\mathcal O_L$. Define
> $$
> \varphi:\mathcal O_L/2\mathcal O_L\longrightarrow\mathbb F_2^3,
> \qquad a+bx+cy\longmapsto(a,\ a+c,\ a+b+c).
> $$
> This sends $1,x,y$ to $(1,1,1),(0,0,1),(0,1,1)$. These tuples satisfy precisely the three multiplication relations, so $\varphi$ preserves products and the identity. It is bijective: the inverse sends $(r,s,t)$ to $r+(t+s)x+(s+r)y$. Thus
> $$
> \mathcal O_L/2\mathcal O_L\simeq\mathbb F_2^3.
> $$
>
> ### 4. Refute the conductor requirement for every integral element
> Take the nonzero integral ideal $\mathfrak A=2\mathcal O_L$. Suppose an integral element $\theta$ had $\mathfrak F_\theta+\mathfrak A=\mathcal O_L$. Then $1=c+v$ for some $c\in\mathfrak F_\theta$ and $v\in2\mathcal O_L$. For every $z\in\mathcal O_L$,
> $$
> cz\in\mathbb Z[\theta],\qquad z-cz=vz\in2\mathcal O_L.
> $$
> Therefore reduction of $\mathbb Z[\theta]$ would surject onto $\mathcal O_L/2\mathcal O_L$, making this quotient $\mathbb F_2[\bar\theta]$.
>
> But every $u\in\mathbb F_2^3$ satisfies $u^2=u$ coordinatewise. Every polynomial in $u$ reduces to $a+bu$, so $\dim_{\mathbb F_2}\mathbb F_2[u]\le2$. It cannot equal the three-dimensional algebra $\mathbb F_2^3$. This contradiction rules out the conductor condition for **every** $\theta\in\mathcal O_L$, including every integral primitive element. The printed universal claim is false.
>
> This also proves that $\mathcal O_L$ is not monogenic and that $2$ is a **common index divisor**. Indeed, for any integral primitive $\theta$, let $m=[\mathcal O_L:\mathbb Z[\theta]]$. If $m$ were odd, $mz\in\mathbb Z[\theta]$ would represent the residue of every $z\in\mathcal O_L$ modulo $2$, contradicting the same quotient obstruction. Hence $2\mid m$ for every integral primitive element.

## A Valid Replacement with Different Quantifiers

> [!abstract] For number fields: an integral primitive element works away from a finite exceptional set
> For a number field $L$, there exist an integral primitive element $\theta$ and a nonzero integer $m$ such that its conductor contains $m\mathcal O_L$. Consequently it is relatively prime to every integral ideal $\mathfrak A$ satisfying $m\mathcal O_L+\mathfrak A=\mathcal O_L$.

> [!success]- Independent proof of the replacement
> By the finite-separable primitive element theorem, choose $\alpha$ with $L=\mathbb Q(\alpha)$. Write its monic rational minimal polynomial as $T^n+a_{n-1}T^{n-1}+\cdots+a_0$, and choose a positive integer $d$ clearing all coefficient denominators. The element $\theta=d\alpha$ satisfies
> $$
> T^n+da_{n-1}T^{n-1}+\cdots+d^na_0\in\mathbb Z[T],
> $$
> so it is integral and $L=\mathbb Q(\theta)$. The trace-coordinate argument used above, applied to its power basis, shows that $\mathcal O_L$ is a rank-$n$ integer lattice containing $\mathbb Z[\theta]$ with finite index $m$. The finite group $\mathcal O_L/\mathbb Z[\theta]$ has order $m$, so $m\mathcal O_L\subseteq\mathbb Z[\theta]$. For $z\in\mathcal O_L$, $(mz)\mathcal O_L\subseteq m\mathcal O_L$, hence $m\mathcal O_L\subseteq\mathfrak F_\theta$. If $m\mathcal O_L+\mathfrak A=\mathcal O_L$, the same holds for $\mathfrak F_\theta+\mathfrak A$. Only primes dividing $m\mathcal O_L$ are excluded.

The exceptional primes depend on the chosen element. This replacement does **not** assert that one can avoid a prescribed exceptional prime by changing the element; the counterexample proves that $2$ cannot be avoided in this field.

## Related Concepts

- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Conductors]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Quotient Rings|Quotient Rings]]
- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

- **Source verification:** [S4, Ch. I, §8, Exercise 2, printed p. 52, PDF p. 71]. The surrounding Dedekind-domain notation is in printed pp. 44–45 / PDF pp. 63–64. No source figure is needed.
- **External provenance:** Dedekind's cubic and the obstruction at $2$ are recorded in Keith Conrad, [*Factoring after Dedekind*, Example 7, printed/PDF pp. 5–6](https://kconrad.math.uconn.edu/blurbs/gradnumthy/dedekindf.pdf). That note states the index obstruction and nonmonogeneity; it does not provide the full integral-basis and quotient computation given here. Those calculations, and their application to Neukirch's exercise, are independent derivations.
- **Inputs and proof scope:** Integrality is closed under sums and products; the trace of an algebraic integer in a number field is integral; a subgroup of a finite-rank free integer module is free; the determinant of a full lattice inclusion gives its index. The trace/discriminant definitions and integral-coordinate argument were visually checked in [S4, Ch. I, §2, Proposition 2.8 and Lemma 2.9, printed pp. 11–12, PDF pp. 30–31]. The discriminant change-of-basis calculation, square-free test, and quotient obstruction are expanded above. The replacement additionally imports the finite-separable primitive element theorem from the linked concept.
- **Routing:** Ring Theory is primary because the counterexample depends on integral orders, lattice index, a quotient algebra, and the conductor. Field generation is a cross-topic prerequisite.
- **Terminology:** A field generator $L=\mathbb Q(\theta)$ need not be a ring generator $\mathcal O_L=\mathbb Z[\theta]$. The prescribed conductor condition is already obstructed after reduction modulo $2$.
