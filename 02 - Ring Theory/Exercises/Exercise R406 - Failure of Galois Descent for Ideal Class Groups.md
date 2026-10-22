---
title: 'Exercise R406: Failure of Galois Descent for Ideal Class Groups'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 4, printed p. 373, PDF p. 392
source_refs:
- S4/ch-VI/sec-2/ex-4
created: '2026-10-23'
---

# Exercise R406: Failure of Galois Descent for Ideal Class Groups

## Problem Statement

> [!question] Neukirch VI.2.4
> The ideal class group, unlike the idèle class group, does not have Galois descent. More precisely, for a Galois extension $L|K$, the homomorphism $Cl_K\to Cl_L^{G(L|K)}$ is in general neither injective nor surjective.

## Hints

> [!hint]- 提示
> For failure of surjectivity start with $\mathbb Q$ and an imaginary quadratic field of class number two. For failure of injectivity use capitulation in a Hilbert class field.

> [!hint]- Stronger hint
> In Q(sqrt(-5)), the nonprincipal ideal p=(2,1+sqrt(-5)) has p^2=(2). In K(i), compare it with the principal ideal (1+i).

## Solution

> [!success]- Independent derivation
> 非满例取 $K=\mathbb Q$，$L=\mathbb Q(\sqrt{-5})$。Minkowski 界为 $(2/\pi)\sqrt{20}<3$，故每个理想类由范数至多 $2$ 的整理想代表。唯一范数 $2$ 的素理想是 $\mathfrak p=(2,1+\sqrt{-5})$：模 $2$ 的最小多项式为 $(X+1)^2$，且 $\mathcal O_L=\mathbb Z[\sqrt{-5}]$。它非主，因为主理想范数 $2$ 将给整数解 $x^2+5y^2=2$，不存在。又 $\mathfrak p^2=(2)$，所以类群恰为 $C_2$。复共轭在二次域类群上按取逆作用：$\mathfrak a\overline{\mathfrak a}$ 为一个有理整数生成的主理想。在 $C_2$ 上取逆为恒等，故 $\mathrm{Cl}_L^{G}=C_2$，而 $\mathrm{Cl}_{\mathbb Q}=1$；原映射不满。
>
> 非单例可完全显式构造，不需要引用主理想定理。现取 $K=\mathbb Q(\sqrt{-5})$，$L=K(i)=\mathbb Q(i,\sqrt5)$。$i\notin K$，所以 $L/K$ 是二次 Galois 扩张。仍记上面的非主理想 $\mathfrak p$。扩张理想满足
> $$
> (\mathfrak p\mathcal O_L)^2=(2)\mathcal O_L,
> \qquad ((1+i)\mathcal O_L)^2=(2i)\mathcal O_L=(2)\mathcal O_L.
> $$
> Dedekind 域的非零分式理想群是素理想生成的自由交换群，因而无扭；两个理想的平方相等迫使它们相等。因此 $\mathfrak p\mathcal O_L=(1+i)\mathcal O_L$，非平凡的类 $[\mathfrak p]\in\mathrm{Cl}_K$ 在 $L$ 中变为平凡，原映射不单。两个反例分别处理两种失败，未声称同一扩张同时兼具两者。

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Adeles and Ideles]]

## Notes

题面已与原书图像核对。[Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. VI, §2, Exercise 4, printed p.373, PDF p.392]。解答为独立推导。两个反例分别证实两种失败；没有声称同一个扩张同时提供两种失败。
