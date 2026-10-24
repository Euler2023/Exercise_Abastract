---
title: "Exercise R351: A Table of Real Quadratic Fundamental Units"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §7, Exercise 2, printed pp. 43–44, PDF pp. 62–63"
created: 2026-10-20
---

# Exercise R351: A Table of Real Quadratic Fundamental Units

## Problem Statement

> [!question] Neukirch I.7.2
> Check the following table of fundamental units $\varepsilon_1$ for $\mathbb Q(\sqrt D)$:
>
> | $D$ | $2$ | $3$ | $5$ | $6$ | $7$ | $10$ |
> |---|---|---|---|---|---|---|
> | $\varepsilon_1$ | $1+\sqrt2$ | $2+\sqrt3$ | $(1+\sqrt5)/2$ | $5+2\sqrt6$ | $8+3\sqrt7$ | $3+\sqrt{10}$ |
>
> **Printed hint:** Check one by one for $y=1,2,3,\ldots$, whether one of the numbers $dy^2\mp4$ is a square $x^2$. By the unit theorem this is bound to happen, with the plus sign. However, for fixed $y$, let preference be given to the minus sign. Then the first case, in this order, where $dy_1^2\mp4=x_1^2$, gives the fundamental unit $\varepsilon_1=(x_1+y_1\sqrt d)/2$.

In the continued hint, $d$ is the field discriminant, whereas the table uses the squarefree radicand $D$.

## Hints

> [!hint]- Hint 1: First calculate each discriminant
> The six values of $d$ are $8,12,5,24,28,40$, respectively. A norm check establishes that a displayed element is a unit, but does not by itself establish that it is fundamental.

> [!hint]- Hint 2: Exclude three negative Pell equations globally
> For $d=12,24$, reduction of $x^2-dy^2=-4$ modulo $3$ is impossible. For $d=28$, reduce modulo $7$. For $d=8,5,40$, a negative solution already occurs at $y=1$.

> [!hint]- Hint 3: Only a few positive candidates remain
> For $d=24$, test $y=1,2$ in $dy^2+4$. For $d=28$, test $y=1,2,3$. Apply the complete minimality criterion proved in Exercise I.7.1.

## Solution

> [!success]- Solution
> **Proof scope:** Independent finite verification
>
> We use [[02 - Ring Theory/Exercises/Exercise R350 - Fundamental Units from Pell Equations|Exercise R350]]: the least positive solution to $x^2-dy^2=-4$ gives a fundamental unit if the negative equation is solvable; otherwise use the least positive solution to $x^2-dy^2=4$. The quadratic discriminant formula gives
> $$
> (D,d)=(2,8),(3,12),(5,5),(6,24),(7,28),(10,40).
> $$
>
> **1. Negative solutions at the first possible $y$.** For $y=1$, the three negative candidates are
> $$
> 8-4=2^2,\qquad 5-4=1^2,\qquad40-4=6^2.
> $$
> Since $y$ is a positive integer, no smaller $y$ is possible. These give, respectively,
> $$
> \frac{2+\sqrt8}{2}=1+\sqrt2,\qquad
> \frac{1+\sqrt5}{2},\qquad
> \frac{6+\sqrt{40}}2=3+\sqrt{10}.
> $$
> All have norm $-1$, and the minimality theorem proves that they are fundamental units of the full integer rings.
>
> **2. Prove that the remaining negative equations have no solutions.** If $d=12$ or $24$, reduction modulo $3$ of $x^2-dy^2=-4$ gives $x^2\equiv2\pmod3$, impossible. If $d=28$, it gives $x^2\equiv3\pmod7$, whereas the squares modulo $7$ are $0,1,2,4$. Thus we must use the positive equation in these three cases.
>
> For $d=12$, the first positive candidate is
> $$
> 12\cdot1^2+4=16=4^2,
> \qquad \frac{4+\sqrt{12}}2=2+\sqrt3.
> $$
> For $d=24$, the successive candidates are
> $$
> 24\cdot1^2+4=28,\qquad
> 24\cdot2^2+4=100=10^2.
> $$
> The first is not a square, so the least solution is $(x,y)=(10,2)$, giving $(10+2\sqrt{24})/2=5+2\sqrt6$.
>
> For $d=28$, the successive candidates are
> $$
> 28\cdot1^2+4=32,\qquad
> 28\cdot2^2+4=116,\qquad
> 28\cdot3^2+4=256=16^2.
> $$
> Here $25<32<36$ and $100<116<121$, so the first two are not squares. The least solution is $(16,3)$, giving $(16+3\sqrt{28})/2=8+3\sqrt7$.
>
> **3. Summarize what was established.** The exact norm and minimality data are
>
> | $D$ | $d$ | least $(x,y)$ | norm | fundamental unit |
> |---|---|---|---|---|
> | $2$ | $8$ | $(2,1)$ | $-1$ | $1+\sqrt2$ |
> | $3$ | $12$ | $(4,1)$ | $1$ | $2+\sqrt3$ |
> | $5$ | $5$ | $(1,1)$ | $-1$ | $(1+\sqrt5)/2$ |
> | $6$ | $24$ | $(10,2)$ | $1$ | $5+2\sqrt6$ |
> | $7$ | $28$ | $(16,3)$ | $1$ | $8+3\sqrt7$ |
> | $10$ | $40$ | $(6,1)$ | $-1$ | $3+\sqrt{10}$ |
>
> Each entry is a unit by its Pell norm equation, and the preceding exclusions prove the required minimality. Therefore every unit in the corresponding full integer ring is $\pm\varepsilon_1^m$, $m\in\mathbb Z$, for the displayed entry.

## Related Concepts

- [[02 - Ring Theory/Concepts/Units in Real Quadratic Fields|Units in Real Quadratic Fields]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Dirichlets Unit Theorem and Logarithmic Unit Lattices|Dirichlet's Unit Theorem and Logarithmic Unit Lattices]]

## Notes

- **Source status:** The complete table was checked at [S4, Ch. I, §7, Exercise 2, printed p. 43, PDF p. 62], and its entire continued hint at [printed p. 44, PDF p. 63]. The two pages belong to the same numbered exercise. The table is transcribed, not retained as a screenshot.
- **Proof inputs:** The minimal-Pell-solution criterion is proved in linked R350, and the discriminant formula in R333. All residue exclusions and square checks used for this finite table are displayed above. No numerical approximation or unreported computation is needed.
- **Boundary:** Checking only $N(\varepsilon_1)=\pm1$ would leave fundamental minimality unproved. For the negative equations declared impossible, the modular arguments exclude every $y$, not just the first tested values.
- **Routing:** Ring Theory is primary because the proof determines unit generators through norms and integral Pell equations.
