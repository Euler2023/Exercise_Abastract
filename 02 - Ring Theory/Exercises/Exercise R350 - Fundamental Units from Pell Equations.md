---
title: "Exercise R350: Fundamental Units from Pell Equations"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §7, Exercise 1, printed p. 43, PDF p. 62"
created: 2026-10-20
---

# Exercise R350: Fundamental Units from Pell Equations

## Problem Statement

> [!question] Neukirch I.7.1
> Let $D>1$ be a squarefree integer and $d$ the discriminant of the real quadratic number field $K=\mathbb Q(\sqrt D)$ (see §2, exercise 4). Let $x_1,y_1$ be the uniquely determined rational integer solution of the equation
> $$
> x^2-dy^2=-4,
> $$
> or — in case this equation has no rational integer solutions — of the equation
> $$
> x^2-dy^2=4,
> $$
> for which $x_1,y_1>0$ are as small as possible. Then
> $$
> \varepsilon_1=\frac{x_1+y_1\sqrt d}{2}
> $$
> is a fundamental unit of $K$. (The pair of equations $x^2-dy^2=\pm4$ is called Pell's equation.)

Here the square root is positive in the selected real embedding. A fundamental unit means a unit $\varepsilon_1>1$ with $\mathcal O_K^\times=\{\pm\varepsilon_1^m:m\in\mathbb Z\}$. It need not be positive in both real embeddings.

## Hints

> [!hint]- Hint 1: Use the field discriminant
> The quadratic integer-ring formula expresses a unit as $(x+y\sqrt d)/2$ with $x,y\in\mathbb Z$. Norm $\pm1$ becomes $x^2-dy^2=\pm4$. Keep $d$ distinct from the radicand $D$ when $D\equiv2,3\pmod4$.

> [!hint]- Hint 2: The least unit greater than one generates
> Units exist beyond $\pm1$ by Dirichlet's theorem. There are only finitely many units in $1<u\le C$ for fixed $C$, since the conjugate is $\pm1/u$ and the integer coordinates are bounded. Divide any positive unit by a suitable power of the least unit greater than one.

> [!hint]- Hint 3: Explain the preference for norm minus one
> If a norm-$-1$ unit exists, let $\eta>1$ be the least such unit. A norm-$+1$ unit $u$ with $1<u<\eta$ would make $\eta/u$ a smaller norm-$-1$ unit. This is why the negative Pell equation takes precedence.

## Solution

> [!success]- Independent derivation
> **1. Translate units into the two Pell equations.** By the quadratic integral-basis calculation in [[02 - Ring Theory/Exercises/Exercise R333 - Integral Bases and Discriminants of Quadratic Number Fields|Exercise R333]],
> $$
> d=\begin{cases}D,&D\equiv1\pmod4,\\4D,&D\equiv2,3\pmod4.\end{cases}
> $$
> Every algebraic integer of $K$ can therefore be written $(x+y\sqrt d)/2$ with integers $x,y$. A unit has norm $\pm1$, so its coordinates satisfy $x^2-dy^2=\pm4$.
>
> Conversely, integer coordinates satisfying either equation give an algebraic integer. If $d=D\equiv1\pmod4$, reduction modulo $4$ gives $x\equiv y\pmod2$, precisely the required parity. If $d=4D$, reduction modulo $4$ makes $x$ even, and the element is $x/2+y\sqrt D\in\mathbb Z[\sqrt D]$. Its norm is $\pm1$, so its inverse is $\pm$ its integral conjugate. Thus it is a unit.
>
> For a unit $u>1$ in the selected embedding, write $\overline u=N(u)/u$. Then
> $$
> x=u+\overline u>0,\qquad
> y=\frac{u-\overline u}{\sqrt d}>0.
> $$
> Conversely, $x,y>0$ in either Pell equation give $u=(x+y\sqrt d)/2>1$. Indeed if $N(u)=1$ and $u\le1$, then $u-\overline u=u-1/u\le0$, contradicting $y>0$; if $N(u)=-1$ and $u\le1$, then $u+\overline u=u-1/u\le0$, contradicting $x>0$.
>
> **2. Prove that the least unit greater than one is fundamental.** Dirichlet's unit theorem (7.4), for signature $(2,0)$, supplies a unit other than $\pm1$. Changing its sign and taking its inverse if necessary supplies a unit $v>1$. For $1<u\le v$, its conjugate has absolute value at most $1$. Hence the integer coordinates $x=u+\overline u$ and $y=(u-\overline u)/\sqrt d$ are bounded. There are only finitely many such pairs, so the nonempty set of units in $(1,v]$ has a least element $\varepsilon>1$.
>
> For any positive unit $u$, choose $m\in\mathbb Z$ with
> $$
> 1\le u\varepsilon^{-m}<\varepsilon
> $$
> by taking the integer part of $\log u/\log\varepsilon$. The middle expression is a unit. Minimality of $\varepsilon$ forces it to be $1$. Thus every positive unit is a power of $\varepsilon$, and every negative unit is minus such a power. Therefore
> $$
> \mathcal O_K^\times=\{\pm\varepsilon^m:m\in\mathbb Z\}.
> $$
>
> **3. Identify its norm and the selected Pell solution.** Suppose a norm-$-1$ unit exists. After changing sign or taking the inverse it can be chosen greater than $1$; the same finite-coordinate argument gives a least one $\eta>1$. No unit $u$ lies strictly between $1$ and $\eta$: a norm-$-1$ unit there contradicts its definition, and a norm-$+1$ unit there makes $\eta/u$ a norm-$-1$ unit with
> $$
> 1<\eta/u<\eta.
> $$
> Thus $\eta=\varepsilon$. If no norm-$-1$ unit exists, the least unit $\varepsilon>1$ has norm $+1$.
>
> Within either fixed Pell equation, $x=\sqrt{dy^2\pm4}$ is strictly increasing with positive $y$, and so is $(x+y\sqrt d)/2$. Consequently the positive solution with smallest $y$ also has smallest $x$ and gives the least corresponding unit. This makes the source's simultaneous minimality and uniqueness precise. The prescribed negative equation, or the positive equation when no negative solution exists, therefore gives exactly $\varepsilon_1=\varepsilon$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet's Unit Theorem and Logarithmic Unit Lattices]]

## Notes

- **Source status:** The complete problem and both signs were checked at [S4, Ch. I, §7, Exercise 1, printed p. 43, PDF p. 62]. There is no printed hint. No source figure is needed.
- **Proof inputs:** The integral-basis formula is proved independently in the linked R333. Dirichlet's theorem (7.4), including its proof, was checked at [S4, printed p. 42, PDF p. 61]; only existence of a nontrivial unit in a real quadratic field is imported. The least-unit argument, negative-norm preference, and Pell translation above are independent derivations.
- **Convention:** A fundamental generator of the full unit group need not generate the subgroup of totally positive units. If $N(\varepsilon_1)=-1$, that subgroup is generated by $\varepsilon_1^2$. Also, the equations with $d$ describe the full integer ring; replacing $d$ by $D$ without checking denominators can describe a smaller order instead.
- **Routing:** Ring Theory is primary because norms, integral coordinates, units, and divisibility by powers of a unit do the main work.
