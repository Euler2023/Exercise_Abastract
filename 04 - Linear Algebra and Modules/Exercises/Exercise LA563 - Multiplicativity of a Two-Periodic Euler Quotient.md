---
title: 'Exercise LA563: Multiplicativity of a Two-Periodic Euler Quotient'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 1, printed p. 314, PDF p. 333
source_refs:
- S4/ch-IV/sec-7/ex-1
created: '2026-10-23'
---

# Exercise LA563: Multiplicativity of a Two-Periodic Euler Quotient

## Problem Statement

> [!question] Neukirch IV.7.1
> Let $f,g$ be endomorphisms of an abelian group $A$ such that $f\circ g=g\circ f=0$. Make sense of the following statement. The quotient
> $$
> q_{f,g}(A)=\frac{(\ker f:\operatorname{im}g)}{(\ker g:\operatorname{im}f)}
> $$
> is multiplicative.

## Hints

> [!hint]- Hint 1
> 应在带有两个相容端同态的短正合列上理解乘法性，且两个同调商均须有限。

> [!hint]- Hint 2
> 两个交替的微分给出二周期复形；短正合复形给出循环的六项同调正合列。

## Solution

> [!success]- Independent derivation
> “乘法性”的精确定义如下：设 $0\to A\to B\to C\to0$ 为交换群短正合列，三个群都带端同态 $f,g$，所有箭头与 $f,g$ 交换，且各群上 $fg=gf=0$。令
> $$
> H_f(X)=\ker(f:X\to X)/gX,\qquad H_g(X)=\ker(g:X\to X)/fX.
> $$
> 当这些群有限时，$q_{f,g}(X)=\#H_f(X)/\#H_g(X)$。结论是：若三个对象中任意两个的两项同调有限，则第三个也有限，并有 $q(B)=q(A)q(C)$。
>
> 构造连接映射 $H_f(C)\to H_g(A)$：对 $c\in\ker f_C$ 取提升 $b\in B$，则 $fb\in A$ 且 $gfb=0$，映到 $[fb]$。换提升改变 $fA$，换代表元 $c$ 为 $c+gc'$ 时可换提升为 $b+gb'$，而 $fgb'=0$，所以映射良定义。交换 $f,g$ 得另一连接映射 $H_g(C)\to H_f(A)$。
>
> 由这两个连接映射及包含/投影，得到六项循环正合列
> $$
> H_f(A)\to H_f(B)\to H_f(C)\to H_g(A)\to H_g(B)\to H_g(C)\to H_f(A).
> $$
> 例如 $[c]$ 的连接像为零意味着 $fb=fa$，故 $b-a\in\ker f_B$ 提升 $c$，证明该处核等于像。若 $[a]\in H_g(A)$ 在 $H_g(B)$ 中为零，写 $a=fb$，则 $c$ 为 $b$ 的像且 $fc=0$，连接像即为 $[a]$。其余两类位置分别由投影核是 $A$ 及同样交换 $f,g$ 的论证得到。
>
> 有限群正合六边形中，按各箭头像的阶相乘并约去，得
> $$
> \#H_f(A)\,\#H_f(C)\,\#H_g(B)
> =\#H_f(B)\,\#H_g(A)\,\#H_g(C).
> $$
> 这正是 $q(B)=q(A)q(C)$；同一正合列也说明任两对象的同调有限会迫使第三个的同调有限。

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Periodic Cohomology]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 1, printed p. 314, PDF p. 333]. 独立补明命题所作用的短正合列与有限性条件，并构造连接箭头。
- **Boundary:** 缺少箭头与 $f,g$ 交换的条件时，没有上述复形短正合列，也就不能直接声称该 quotient 乘法。
