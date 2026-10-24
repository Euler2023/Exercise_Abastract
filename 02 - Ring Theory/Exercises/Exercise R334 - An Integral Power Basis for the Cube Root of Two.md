---
title: "Exercise R334: An Integral Power Basis for the Cube Root of Two"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
  - algebraic-integers
  - integral-bases
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §2, Exercise 5, printed p. 15, PDF p. 34"
created: 2026-10-11
---

# Exercise R334: An Integral Power Basis for the Cube Root of Two

## Problem Statement

> [!question] Neukirch I.2.5
> Show that $\{1,\sqrt[3]{2},\sqrt[3]{2^2}\}$ is an integral basis of $\mathbb Q(\sqrt[3]{2})$.

## Hints

> [!hint]- Hint 1: Bound the denominators by traces
> Write $\alpha=\sqrt[3]{2}$ and $z=x_0+x_1\alpha+x_2\alpha^2$. If $z$ is integral, then the traces of $z$, $z\alpha$, and $z\alpha^2$ are integers. They are respectively $3x_0$, $6x_2$, and $6x_1$.

> [!hint]- Hint 2: Reduce to a denominator of $2$ or $3$
> The first hint gives $6z\in\mathbb Z[\alpha]$. If the integer ring were larger than this order, choose an integral element outside it with denominator $2$ or $3$, and reduce its numerator coefficients modulo that prime.

> [!hint]- Hint 3: Use more than the trace
> For $w=(a+b\alpha+c\alpha^2)/p$, the second elementary symmetric coefficient and the norm are
> $$
> e_2(w)=\frac{3a^2-6bc}{p^2},\qquad
> N(w)=\frac{a^3+2b^3+4c^3-6abc}{p^3}.
> $$
> Both must be integers. For $p=3$, choose $a,b,c\in\{-1,0,1\}$; the congruences force $(a,b,c)=(t,-t,t)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $\alpha=\sqrt[3]{2}$, $K=\mathbb Q(\alpha)$, and $R=\mathbb Z[\alpha]$. The monic cubic $T^3-2$ has no integer root: by the rational-root lemma, a rational root would be one of $\pm1,\pm2$, and none is a root. A reducible cubic over a field has a linear factor, so this polynomial is irreducible over $\mathbb Q$. Hence $[K:\mathbb Q]=3$ and
> $$
> R=\mathbb Z\oplus\mathbb Z\alpha\oplus\mathbb Z\alpha^2.
> $$
> The element $\alpha$ is integral, so $R\subseteq\mathcal O_K$. We must prove the opposite inclusion.
>
> **1. A trace bound on every integral element.** The three conjugates of $\alpha$ are $\alpha,\zeta\alpha,\zeta^2\alpha$, where $\zeta^3=1$ and $\zeta\neq1$. Consequently
> $$
> \operatorname{Tr}(1)=3,\qquad
> \operatorname{Tr}(\alpha)=\operatorname{Tr}(\alpha^2)=0,
> \qquad \operatorname{Tr}(\alpha^3)=6,
> \qquad \operatorname{Tr}(\alpha^4)=0.
> $$
> Here and below the trace and norm are taken from $K$ to $\mathbb Q$. If $z=x_0+x_1\alpha+x_2\alpha^2\in\mathcal O_K$, then $z$, $z\alpha$, and $z\alpha^2$ are integral. Their traces are therefore integers, giving
> $$
> 3x_0\in\mathbb Z,\qquad 6x_2\in\mathbb Z,
> \qquad 6x_1\in\mathbb Z.
> $$
> Thus $6z\in R$ for every $z\in\mathcal O_K$.
>
> Suppose $\mathcal O_K\neq R$, and choose $z\in\mathcal O_K\setminus R$. Let $d$ be the least positive integer such that $dz\in R$. The additive coset $z+R$ has order $d$, so $d\mid6$; this also follows by dividing $6$ by $d$ and using minimality. Since $d>1$, it has a prime divisor $p\in\{2,3\}$. Then
> $$
> w=\frac d p z\in\mathcal O_K\setminus R,
> \qquad pw\in R.
> $$
> Subtracting an element of $R$ preserves both integrality and the fact that $w\notin R$. We can therefore write
> $$
> w=\frac{a+b\alpha+c\alpha^2}{p},
> $$
> with coefficients chosen from any complete residue system modulo $p$, not all zero.
>
> **2. Necessary characteristic coefficients.** For such an element, direct calculation gives
> $$
> \operatorname{Tr}(w)=\frac{3a}{p},\qquad
> e_2(w)=\frac{3a^2-6bc}{p^2},\qquad
> N(w)=\frac{a^3+2b^3+4c^3-6abc}{p^3}.
> $$
> To check the middle formula, use
> $$
> e_2(w)=\frac{\operatorname{Tr}(w)^2-\operatorname{Tr}(w^2)}2,
> \qquad
> \operatorname{Tr}\bigl((a+b\alpha+c\alpha^2)^2\bigr)
> =3a^2+12bc.
> $$
> For the norm formula, multiplication by $a+b\alpha+c\alpha^2$ has matrix
> $$
> \begin{pmatrix}
> a&2c&2b\\
> b&a&2c\\
> c&b&a
> \end{pmatrix}
> $$
> in the basis $1,\alpha,\alpha^2$, and its determinant is the displayed numerator. Because $w$ is integral, its conjugates are integral. Their elementary symmetric functions are both rational and integral over $\mathbb Z$, hence belong to $\mathbb Z$. Thus all three displayed quantities must be integers, whether or not $w$ itself generates $K$.
>
> **3. Exclude $p=2$.** Choose $a,b,c\in\{0,1\}$. Integrality of $3a/2$ forces $a=0$. Since the coefficients are not all zero, the norm numerator
> $$
> 2b^3+4c^3
> $$
> is one of $2,4,6$. None is divisible by $8$, contradicting $N(w)\in\mathbb Z$.
>
> **4. Exclude $p=3$.** Choose $a,b,c\in\{-1,0,1\}$. Integrality of the norm implies, modulo $3$,
> $$
> a-b+c\equiv0\pmod3,
> $$
> while integrality of $e_2(w)=(a^2-2bc)/3$ implies
> $$
> a^2+bc\equiv0\pmod3.
> $$
> Substitute $a\equiv b-c$ into the second relation. It gives
> $$
> 0\equiv b^2-bc+c^2\equiv(b+c)^2\pmod3.
> $$
> Hence $c\equiv-b$ and $a\equiv-b\pmod3$. Our centered residue system makes these exact equalities: $a=c=t$ and $b=-t$ with $t\in\{-1,0,1\}$. The nonzero numerator condition excludes $t=0$. But then
> $$
> N(w)=\frac{t^3+2(-t)^3+4t^3-6t(-t)t}{27}
> =\frac{9t^3}{27}=\frac{t^3}{3}\notin\mathbb Z,
> $$
> again a contradiction.
>
> Both possible prime denominators are impossible, so $\mathcal O_K=R$. Therefore $1,\sqrt[3]{2},\sqrt[3]{2^2}=\alpha^2$ form an integral basis. As a further calculation, its trace matrix gives
> $$
> d_K=\det\begin{pmatrix}3&0&0\\0&0&6\\0&6&0\end{pmatrix}=-108.
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Conductors]]
- [[02 - Ring Theory/Concepts/Polynomial Discriminants|Polynomial Discriminants]]
- [[03 - Field Theory/Concepts/Primitive Elements|Primitive Elements]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]

## Notes

- **Source verification:** [S4, Ch. I, §2, Exercise 5, printed p. 15, PDF p. 34]. The problem and the exponent inside the second cube root were checked against a rendered original PDF page. No source figure is needed.
- **Proof status:** The exercise statement is in Neukirch; the solution above is an independent derivation. It proves maximality directly from the trace bound and the characteristic coefficients, without importing a local index criterion or a classification of pure cubic integer rings.
- **Inputs and proof scope:** Algebraic integers are closed under sums and products; embeddings preserve integrality; a rational algebraic integer is an integer. These imply the integrality of trace, norm, and the other characteristic coefficients. The rational-root lemma and the trace/norm descriptions by embeddings or multiplication matrices are used explicitly. The denominator reduction and both residue calculations are proved above.
- **Method boundary:** An integral primitive field element does not in general give an integral power basis. Here the separate denominator argument proves that this particular power basis is integral.
- **Routing:** Ring Theory is primary because the goal is to determine the integral closure of $\mathbb Z$ and show that an integral order is maximal. The trace matrix and rational basis provide cross-topic linear algebra tools.
